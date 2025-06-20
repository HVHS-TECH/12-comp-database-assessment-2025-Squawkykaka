import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔐 Firebase Config (suggest: move to env variables in production)
const firebaseConfig = {
	apiKey: "AIzaSyBhJq8DHRu56v_NXgqkhhp8WS-dRsbhK2A",
	authDomain: "database-asessment-squawkykaka.firebaseapp.com",
	projectId: "database-asessment-squawkykaka",
	storageBucket: "database-asessment-squawkykaka.firebasestorage.app",
	messagingSenderId: "951735245072",
	appId: "1:951735245072:web:c42551811a8ae8bcb32d95",
};

export const fb_app = initializeApp(firebaseConfig);
export const fb_db = getFirestore(fb_app);
export const fb_auth = getAuth(fb_app);