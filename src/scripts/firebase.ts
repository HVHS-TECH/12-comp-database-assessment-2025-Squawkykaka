import { initializeApp, type FirebaseApp } from "firebase/app";
const { getAuth, GoogleAuthProvider, signInWithPopup } = await import(
  "firebase/auth"
);
import { Database, getDatabase } from "firebase/database";

// Variables
export let FB_GAMEAPP: FirebaseApp, FB_GAMEDB: Database;

// Config and api keys
const FB_GAMECONFIG = {
  apiKey: "AIzaSyAKJ4yC-PXdQfaWMQRMWumS85GaGPpvbLE",
  authDomain: "comp-2025-george-leask.firebaseapp.com",
  projectId: "comp-2025-george-leask",
  storageBucket: "comp-2025-george-leask.firebasestorage.app",
  messagingSenderId: "727231405255",
  appId: "1:727231405255:web:9f4f51e64681939067b2e2",
  measurementId: "G-3LTSMW0XGY",
  databaseURL:
    "https://comp-2025-george-leask-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// helper functions
export function fb_initialise() {
  FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
  FB_GAMEDB = getDatabase(FB_GAMEAPP);

  console.log("Database loaded!");
}

export async function fb_authenticate() {
  console.log("authenticating");

  const AUTH = getAuth();
  const PROVIDER = new GoogleAuthProvider();

  // The following makes Google ask the user to select the account

  PROVIDER.setCustomParameters({
    prompt: "select_account",
  });

  try {
    const result = await signInWithPopup(AUTH, PROVIDER);
    console.info("authentication success, result: " + result);
    return result;
  } catch (error) {
    console.info("authentication fail, error: " + error);

    throw error;
  }
}
