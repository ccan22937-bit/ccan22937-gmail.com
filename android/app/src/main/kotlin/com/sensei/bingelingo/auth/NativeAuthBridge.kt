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

        if (!serverClientId.isNullOrBlank()) {
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
                notifyError("Giriş işlemi iptal edildi.")
            } else {
                val task: Task<GoogleSignInAccount> = GoogleSignIn.getSignedInAccountFromIntent(result.data)
                handleSignInResult(task)
            }
        }
    }

    private fun handleSignInResult(completedTask: Task<GoogleSignInAccount>) {
        try {
            val account: GoogleSignInAccount = completedTask.getResult(ApiException::class.java)
            val idToken = account.idToken ?: ""
            val email = account.email ?: ""
            val displayName = account.displayName ?: ""
            val photoUrl = account.photoUrl?.toString() ?: ""

            val json = JSONObject().apply {
                put("idToken", idToken)
                put("email", email)
                put("displayName", displayName)
                put("photoUrl", photoUrl)
                put("success", true)
            }

            activity.runOnUiThread {
                val js = "if (window.__onNativeGoogleSignInSuccess) { window.__onNativeGoogleSignInSuccess(${json.toString()}); }"
                webView.evaluateJavascript(js, null)
            }
        } catch (e: ApiException) {
            Log.e(tag, "Google Sign-In failed with code: ${e.statusCode}, message: ${e.message}")
            notifyError("Google Giriş Hatası (${e.statusCode}): ${e.localizedMessage ?: "Bilinmeyen hata"}")
        } catch (e: Exception) {
            Log.e(tag, "Unexpected sign-in error: ${e.message}")
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
