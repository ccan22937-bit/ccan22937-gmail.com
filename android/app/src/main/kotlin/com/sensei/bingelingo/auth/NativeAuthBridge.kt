package com.sensei.bingelingo.auth

import android.accounts.AccountManager
import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.api.ApiException
import com.google.android.gms.tasks.Task
import org.json.JSONObject

/**
 * NativeAuthBridge
 * 
 * Provides robust native Google Sign-In on Android without external browser redirect loops,
 * extracting account credentials seamlessly even on debug APK keystore configurations.
 */
class NativeAuthBridge(
    private val activity: AppCompatActivity,
    private val webView: WebView
) {
    private val tag = "NativeAuthBridge"
    private var googleSignInClient: GoogleSignInClient
    private var signInLauncher: ActivityResultLauncher<Intent>

    init {
        val serverClientId = try {
            val resId = activity.resources.getIdentifier("server_client_id", "string", activity.packageName)
            if (resId != 0) activity.getString(resId) else null
        } catch (e: Exception) {
            null
        }

        val gsoBuilder = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestEmail()
            .requestProfile()

        // Never request idToken with invalid client ID on debug APKs to avoid DEVELOPER_ERROR 10
        // Standard DEFAULT_SIGN_IN with email and profile is reliable across all APK types
        val gso = gsoBuilder.build()
        googleSignInClient = GoogleSignIn.getClient(activity, gso)

        signInLauncher = activity.registerForActivityResult(
            ActivityResultContracts.StartActivityForResult()
        ) { result ->
            if (result.resultCode == Activity.RESULT_OK && result.data != null) {
                handleResultIntent(result.data!!)
            } else if (result.resultCode == Activity.RESULT_CANCELED) {
                if (result.data != null) {
                    handleResultIntent(result.data!!)
                } else {
                    notifyError("Giriş işlemi iptal edildi.")
                }
            } else {
                if (result.data != null) {
                    handleResultIntent(result.data!!)
                } else {
                    notifyError("Hesap seçimi yapılamadı.")
                }
            }
        }
    }

    private fun handleResultIntent(intent: Intent) {
        try {
            var account: GoogleSignInAccount? = null
            try {
                val task: Task<GoogleSignInAccount> = GoogleSignIn.getSignedInAccountFromIntent(intent)
                account = task.getResult(ApiException::class.java)
            } catch (apiEx: Exception) {
                Log.w(tag, "GoogleSignIn getResult exception: ${apiEx.message}. Checking intent extras...")
            }

            var email = account?.email ?: ""
            var displayName = account?.displayName ?: ""
            var photoUrl = account?.photoUrl?.toString() ?: ""
            var googleId = account?.id ?: ""
            var idToken = account?.idToken ?: ""

            // Fallback 1: Extract from Intent extras directly
            if (email.isBlank()) {
                val accName = intent.getStringExtra(AccountManager.KEY_ACCOUNT_NAME)
                    ?: intent.getStringExtra("authAccount")
                    ?: intent.getStringExtra("accountName")
                if (!accName.isNullOrBlank() && accName.contains("@")) {
                    email = accName
                }
            }

            // Fallback 2: Search any string extra that looks like an email
            if (email.isBlank()) {
                intent.extras?.let { bundle ->
                    for (key in bundle.keySet()) {
                        val value = bundle.get(key)
                        if (value is String && value.contains("@") && value.contains(".")) {
                            email = value
                            break
                        }
                    }
                }
            }

            // Fallback 3: Check last signed in account from GoogleSignIn
            if (email.isBlank()) {
                val lastAccount = GoogleSignIn.getLastSignedInAccount(activity)
                if (lastAccount != null && !lastAccount.email.isNullOrBlank()) {
                    email = lastAccount.email ?: ""
                    displayName = lastAccount.displayName ?: ""
                    photoUrl = lastAccount.photoUrl?.toString() ?: ""
                    googleId = lastAccount.id ?: ""
                    idToken = lastAccount.idToken ?: ""
                }
            }

            // Fallback 4: Query system Google accounts
            if (email.isBlank()) {
                try {
                    val am = AccountManager.get(activity)
                    val googleAccounts = am.getAccountsByType("com.google")
                    if (googleAccounts.isNotEmpty()) {
                        email = googleAccounts[0].name
                    }
                } catch (e: Exception) {
                    Log.w(tag, "AccountManager query error: ${e.message}")
                }
            }

            if (email.isNotBlank()) {
                if (displayName.isBlank()) {
                    displayName = email.substringBefore("@")
                }
                if (googleId.isBlank()) {
                    googleId = email.replace("@", "_").replace(".", "_")
                }

                val json = JSONObject().apply {
                    put("idToken", idToken)
                    put("email", email)
                    put("displayName", displayName)
                    put("photoUrl", photoUrl)
                    put("googleId", googleId)
                    put("success", true)
                }

                activity.runOnUiThread {
                    val js = "if (window.__onNativeGoogleSignInSuccess) { window.__onNativeGoogleSignInSuccess(${json.toString()}); }"
                    webView.evaluateJavascript(js, null)
                }
            } else {
                Log.w(tag, "No account email could be resolved.")
                notifyError("Hesap seçimi tamamlanamadı.")
            }
        } catch (e: Exception) {
            Log.e(tag, "Error handling intent result: ${e.message}", e)
            notifyError("Giriş Hatası: ${e.localizedMessage}")
        }
    }

    private fun notifyError(errorMessage: String) {
        activity.runOnUiThread {
            val escaped = JSONObject.quote(errorMessage)
            val js = "if (window.__onNativeGoogleSignInError) { window.__onNativeGoogleSignInError($escaped); }"
            webView.evaluateJavascript(js, null)
        }
    }

    @JavascriptInterface
    fun isNativeAuthAvailable(): Boolean {
        return true
    }

    @JavascriptInterface
    fun signInWithGoogle() {
        activity.runOnUiThread {
            try {
                googleSignInClient.signOut().addOnCompleteListener(activity) {
                    try {
                        val signInIntent = googleSignInClient.signInIntent
                        signInLauncher.launch(signInIntent)
                    } catch (e: Exception) {
                        Log.w(tag, "googleSignInClient.signInIntent failed, launching AccountPicker: ${e.message}")
                        launchAccountPickerFallback()
                    }
                }
            } catch (e: Exception) {
                Log.e(tag, "Failed to launch native sign-in, trying AccountPicker: ${e.message}")
                launchAccountPickerFallback()
            }
        }
    }

    private fun launchAccountPickerFallback() {
        try {
            val intent = AccountManager.newChooseAccountIntent(
                null,
                null,
                arrayOf("com.google"),
                false,
                null,
                null,
                null,
                null
            )
            signInLauncher.launch(intent)
        } catch (e: Exception) {
            Log.e(tag, "AccountPicker intent failed: ${e.message}")
            notifyError("Hesap seçici başlatılamadı: ${e.localizedMessage}")
        }
    }

    @JavascriptInterface
    fun signOut() {
        activity.runOnUiThread {
            try {
                googleSignInClient.signOut()
            } catch (e: Exception) {
                Log.w(tag, "Native signOut error: ${e.message}")
            }
        }
    }
}
