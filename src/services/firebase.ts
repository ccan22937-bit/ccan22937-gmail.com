import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect,
  signInWithCredential,
  signInAnonymously,
  getRedirectResult,
  signOut, 
  User 
} from 'firebase/auth';
import { initializeFirestore, getFirestore } from 'firebase/firestore';
import { Capacitor } from '@capacitor/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import firebaseConfigData from '../../firebase-applet-config.json';

const app = !getApps().length ? initializeApp(firebaseConfigData) : getApp();
export const auth = getAuth(app);

// Initialize Firestore with the specific databaseId as specified by Firebase Integration Guidelines
export const db = getFirestore(app, firebaseConfigData.firestoreDatabaseId);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Initialize GoogleAuth for native platform
let isGoogleAuthInitialized = false;
export const initGoogleAuth = async () => {
  if (isGoogleAuthInitialized) return;
  try {
    if (Capacitor.isNativePlatform()) {
      await GoogleAuth.initialize({
        clientId: '476796648315.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        grantOfflineAccess: false,
      });
      isGoogleAuthInitialized = true;
    }
  } catch (e) {
    console.warn("Native GoogleAuth initialization error:", e);
  }
};

// Check for redirect result on app boot
export const checkRedirectAuth = async (): Promise<User | null> => {
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      return result.user;
    }
  } catch (e) {
    console.warn("getRedirectResult error:", e);
  }
  return null;
};

/**
 * Helper to authenticate via Android Native SenseiAuth bridge
 */
const signInWithAndroidNativeBridge = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const senseiAuth = (window as any).SenseiAuth;
    if (!senseiAuth || typeof senseiAuth.signInWithGoogle !== 'function') {
      return reject(new Error("SenseiAuth bridge not available"));
    }

    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("Native Google Sign-In zaman aşımına uğradı."));
    }, 45000);

    const cleanup = () => {
      clearTimeout(timeout);
      delete (window as any).__onNativeGoogleSignInSuccess;
      delete (window as any).__onNativeGoogleSignInError;
    };

    (window as any).__onNativeGoogleSignInSuccess = async (data: {
      idToken?: string;
      email?: string;
      displayName?: string;
      photoUrl?: string;
    }) => {
      cleanup();
      try {
        if (data?.idToken) {
          const credential = GoogleAuthProvider.credential(data.idToken);
          const userCredential = await signInWithCredential(auth, credential);
          resolve(userCredential.user);
        } else {
          const userCredential = await signInAnonymously(auth);
          resolve(userCredential.user);
        }
      } catch (err) {
        console.error("Firebase signInWithCredential error with native token:", err);
        try {
          const anon = await signInAnonymously(auth);
          resolve(anon.user);
        } catch (anonErr) {
          reject(err);
        }
      }
    };

    (window as any).__onNativeGoogleSignInError = (errorMsg: string) => {
      cleanup();
      console.warn("Native Google Sign-In error callback:", errorMsg);
      if (errorMsg?.toLowerCase().includes("iptal") || errorMsg?.toLowerCase().includes("cancel")) {
        resolve(null);
      } else {
        reject(new Error(errorMsg));
      }
    };

    try {
      senseiAuth.signInWithGoogle();
    } catch (e) {
      cleanup();
      reject(e);
    }
  });
};

/**
 * Google ile Giriş Yapma:
 * - Mobil APK ortamında (SenseiAuth veya Capacitor) native hesap seçici penceresi açar.
 * - Web ortamında Popup / Redirect mekanizmasını kullanır.
 */
export const signInWithGoogle = async (): Promise<User | null> => {
  // 1. Android Native JavascriptInterface Bridge (Highest Priority in APK)
  if ((window as any).SenseiAuth && typeof (window as any).SenseiAuth.signInWithGoogle === 'function') {
    try {
      console.log("Using Android Native SenseiAuth bridge for Google Sign-In...");
      const user = await signInWithAndroidNativeBridge();
      if (user) return user;
    } catch (nativeBridgeErr: any) {
      console.warn("SenseiAuth native bridge error:", nativeBridgeErr);
      if (nativeBridgeErr?.message?.includes("iptal") || nativeBridgeErr?.message?.includes("cancel")) {
        return null;
      }
    }
  }

  // 2. Native Mobile via Capacitor GoogleAuth Plugin
  if (Capacitor.isNativePlatform()) {
    try {
      await initGoogleAuth();
      const googleUser = await GoogleAuth.signIn();
      
      const idToken = googleUser?.authentication?.idToken || (googleUser as any)?.idToken;
      if (idToken) {
        const credential = GoogleAuthProvider.credential(idToken);
        const userCredential = await signInWithCredential(auth, credential);
        return userCredential.user;
      }
      
      const accessToken = googleUser?.authentication?.accessToken || (googleUser as any)?.accessToken;
      if (accessToken) {
        const credential = GoogleAuthProvider.credential(null, accessToken);
        const userCredential = await signInWithCredential(auth, credential);
        return userCredential.user;
      }
    } catch (nativeErr: any) {
      console.warn("Capacitor Native Google Sign-In attempt error:", nativeErr);
      if (nativeErr?.message?.includes('cancel') || nativeErr?.code === '12501' || nativeErr === 'user cancelled') {
        return null;
      }
    }
  }

  // 3. Web Tarayıcısı (Web Browser Popup & Redirect Flow)
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error: any) {
    console.warn("Google sign-in popup error, attempting redirect flow:", error);
    
    // Popup engellendiyse veya iframe/tarayıcı kısıtı varsa Redirect akışını başlat
    if (error.code === 'auth/popup-blocked' || error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
      try {
        await signInWithRedirect(auth, googleProvider);
        return null;
      } catch (redirectErr) {
        console.error("Google sign-in redirect error:", redirectErr);
        throw redirectErr;
      }
    }
    
    throw error;
  }
};

/**
 * Check if the user is the app owner / admin
 * STRICT: Only ccan22937@gmail.com is the verified app owner.
 */
export function isUserAppOwner(user?: any): boolean {
  if (!user) return false;
  const email = (user.email || '').toLowerCase().trim();
  return email === 'ccan22937@gmail.com';
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  return errInfo;
}

/**
 * Oturumu Kapatma (Google Logout)
 */
export const logout = async () => {
  try {
    localStorage.setItem('user_logged_out', 'true');
    localStorage.removeItem('local_tg_user_id');
    localStorage.removeItem('is_app_owner');
    if ((window as any).SenseiAuth && typeof (window as any).SenseiAuth.signOut === 'function') {
      try {
        (window as any).SenseiAuth.signOut();
      } catch (e) {
        console.warn("SenseiAuth signOut error:", e);
      }
    }
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out from Google Auth", error);
  }
};
