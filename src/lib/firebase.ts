import { initializeApp } from 'firebase/app';
import {
	browserSessionPersistence,
	getAuth,
	onAuthStateChanged,
	setPersistence
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { authUser } from './authStore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { browser } from '$app/environment';

// 🔐 Firebase Config
const firebaseConfig = {
	apiKey: 'AIzaSyBhJq8DHRu56v_NXgqkhhp8WS-dRsbhK2A',
	authDomain: 'database-asessment-squawkykaka.firebaseapp.com',
	projectId: 'database-asessment-squawkykaka',
	storageBucket: 'database-asessment-squawkykaka.firebasestorage.app',
	messagingSenderId: '951735245072',
	appId: '1:951735245072:web:c42551811a8ae8bcb32d95'
};

// Export the firebase apps, this means they only get loaded once.
export const fb_app = initializeApp(firebaseConfig, 'CLIENT');
export const fb_db = getFirestore(fb_app);
export const fb_auth = getAuth(fb_app);
setPersistence(fb_auth, browserSessionPersistence);

// If on the browser, initialise ReCaptcha
if (browser) {
	initializeAppCheck(fb_app, {
		provider: new ReCaptchaV3Provider('6Ld0hGsrAAAAAPZMTdnXystT0JCIoIXD-jVxdtaj'),

		// Optional argument. If true, the SDK automatically refreshes App Check
		// tokens as needed.
		isTokenAutoRefreshEnabled: true
	});
}

// This makes sure $authUser is always up to date, meaning page reloads dont break auth.
onAuthStateChanged(fb_auth, (user) => {
	if (user) {
		if (!user.email) {
			console.log('Users email null');
			return;
		}

		authUser.set({
			email: user.email,
			uid: user.uid
		});
	} else {
		authUser.set(undefined);
	}
});
