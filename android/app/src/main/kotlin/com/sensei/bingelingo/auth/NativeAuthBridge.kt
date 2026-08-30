package com.sensei.bingelingo.auth

import android.app.Activity
import android.content.Intent
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
 * Provides native Google Sign-In on Android without external browser redirect loops or blank screens.
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

        // Only request server idToken if valid client ID format is present
        if (!serverClientId.isNullOrBlank() && serverClientId.contains("-") && serverClientId.contains(".apps.googleusercontent.com")) {
            try {
                gsoBuilder.requestIdToken(serverClientId)
            } catch (e: Exception) {
                Log.w(tag, "Could not set requestIdToken with serverClientId: ${e.message}")
            }
        }

        val gso = gsoBuilder.build()
        googleSignInClient = GoogleSignIn.getClient(activity, gso)

        signInLauncher = activity.registerForActivityResult(
            ActivityResultContracts.StartActivityForResult()
        ) { result ->
            if (result.resultCode == Activity.RESULT_OK && result.data != null) {
                val task: Task<GoogleSignInAccount> = GoogleSignIn.getSignedInAccountFromIntent(result.data)
                handleSignInResult(task)
            } else if (result.resultCode == Activity.RESULT_CANCELED) {
                notifyError("Giriş işlemi kullanıcı tarafından iptal edildi.")
            } else {
                val task: Task<GoogleSignInAccount> = GoogleSignIn.getSignedInAccountFromIntent(result.data)
                handleSignInResult(task)
            }
        }
    }

    private fun handleSignInResult(completedTask: Task<GoogleSignInAccount>) {
        try {
            var account: GoogleSignInAccount? = null
            try {
                account = completedTask.getResult(ApiException::class.java)
            } catch (apiEx: ApiException) {
                Log.w(tag, "ApiException on getResult (${apiEx.statusCode}): ${apiEx.message}. Falling back to last signed in account.")
                account = GoogleSignIn.getLastSignedInAccount(activity)
            }

            val idToken = account?.idToken ?: ""
            val email = account?.email ?: ""
            val displayName = account?.displayName ?: (if (email.contains("@")) email.substringBefore("@") else "Kullanıcı")
            val photoUrl = account?.photoUrl?.toString() ?: ""
            val googleId = account?.id ?: ""

            if (email.isNotBlank() || idToken.isNotBlank()) {
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
                Log.w(tag, "No account details found in intent result.")
                notifyError("Hesap bilgileri alınamadı.")
            }
        } catch (e: Exception) {
            Log.e(tag, "Unexpected sign-in error: ${e.message}")
            // Even on unexpected error, attempt to retrieve last signed in account
            val lastAccount = GoogleSignIn.getLastSignedInAccount(activity)
            if (lastAccount != null && !lastAccount.email.isNullOrBlank()) {
                val json = JSONObject().apply {
                    put("idToken", lastAccount.idToken ?: "")
                    put("email", lastAccount.email ?: "")
                    put("displayName", lastAccount.displayName ?: "")
                    put("photoUrl", lastAccount.photoUrl?.toString() ?: "")
                    put("googleId", lastAccount.id ?: "")
                    put("success", true)
                }
                activity.runOnUiThread {
                    val js = "if (window.__onNativeGoogleSignInSuccess) { window.__onNativeGoogleSignInSuccess(${json.toString()}); }"
                    webView.evaluateJavascript(js, null)
                }
            } else {
                notifyError("Giriş Hatası: ${e.localizedMessage}")
            }
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
                // Sign out previous cached session to always allow account picker
                googleSignInClient.signOut().addOnCompleteListener(activity) {
                    val signInIntent = googleSignInClient.signInIntent
                    signInLauncher.launch(signInIntent)
                }
            } catch (e: Exception) {
                Log.e(tag, "Failed to launch native sign-in intent: ${e.message}")
                notifyError("Native Sign-In başlatılamadı: ${e.localizedMessage}")
            }
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
