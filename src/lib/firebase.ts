import { type FirebaseApp, initializeApp, getApps } from 'firebase/app';
import {
	browserSessionPersistence,
	getAuth,
	GoogleAuthProvider,
	setPersistence,
	signInWithPopup,
	type User
} from 'firebase/auth';
import { getDatabase, type Database } from 'firebase/database';

// 🔐 Firebase Config (suggest: move to env variables in production)
const FB_GAMECONFIG = {
	apiKey: 'AIzaSyAKJ4yC-PXdQfaWMQRMWumS85GaGPpvbLE',
	authDomain: 'comp-2025-george-leask.firebaseapp.com',
	projectId: 'comp-2025-george-leask',
	storageBucket: 'comp-2025-george-leask.appspot.com',
	messagingSenderId: '727231405255',
	appId: '1:727231405255:web:9f4f51e64681939067b2e2',
	measurementId: 'G-3LTSMW0XGY',
	databaseURL: 'https://comp-2025-george-leask-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// 🔧 Firebase Instances
let FB_GAMEAPP: FirebaseApp;
let FB_GAMEDB: Database;

// 🚀 Initialize Firebase (guarded)
export function fb_initialise(): { app: FirebaseApp; db: Database } {
	if (!getApps().length) {
		FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
		console.log('Firebase initialized');
	} else {
		FB_GAMEAPP = getApps()[0];
		console.log('Firebase already initialized');
	}

	FB_GAMEDB = getDatabase(FB_GAMEAPP);
	return { app: FB_GAMEAPP, db: FB_GAMEDB };
}

// 🌐 Export DB instance for global access
export { FB_GAMEDB, FB_GAMEAPP };

// 🔐 Google Sign-in Authentication
export async function fb_authenticate(): Promise<User> {
	console.log('Authenticating user via Google');

	const auth = getAuth();

	if (auth.currentUser) {
		console.log('User already signed in:', auth.currentUser.displayName);
		return auth.currentUser;
	}

	const provider = new GoogleAuthProvider();
	provider.setCustomParameters({ prompt: 'select_account' });

	try {
		await setPersistence(auth, browserSessionPersistence);
		const result = await signInWithPopup(auth, provider);
		console.info('Authentication successful:', result.user.displayName);
		return result.user;
	} catch (error) {
		console.error('Authentication failed:', error);
		throw error;
	}
}
