import { goto } from '$app/navigation';
import { fb_authenticate, FB_GAMEDB } from '$lib/firebase';
import { type User, getAuth } from 'firebase/auth';
import { get, ref, set } from 'firebase/database';

// 🔁 Constants for Firebase paths
const PUBLIC_DATA_PATH = '/panel/public/';
const USER_DATA_PATH = '/panel/users/';

// 🔐 Login Flow
export async function login() {
	try {
		await fb_authenticate();
		const user = getCurrentUser();
		const exists = await checkIfUserExists(user.uid);

		if (!exists) {
			console.error('User has not set up an account yet.');
			// TODO: Show UI error that account setup is incomplete
			return;
		}

		goto('/panel/games');
	} catch (error) {
		console.error('Login error:', error);
		// TODO: Show error message to user
	}
}

// 🧾 Signup Flow
export async function signup(event: SubmitEvent | null) {
	if (!event) return;
	event.preventDefault();

	const formData = extractFormData(event);

	try {
		await fb_authenticate();
		const user = getCurrentUser();
		const exists = await checkIfUserExists(user.uid);

		if (exists) {
			console.error('That account already exists.');
			// TODO: Show UI message that account already exists
			return;
		}

		await createUserAccount(user, formData);
		console.log('Account created successfully!');
		goto('/panel/games');
	} catch (error) {
		console.error('Signup error:', error);
		// TODO: Show error message to user
	}
}

// 🧪 Extract form data
function extractFormData(event: SubmitEvent): Record<string, string> {
	const form = event.currentTarget as HTMLFormElement;
	const formData: Record<string, string> = {};

	new FormData(form).forEach((value, key) => {
		if (typeof value === 'string') {
			formData[key] = value.toLowerCase();
		}
	});

	return formData;
}

// 🔍 Check if user already exists
async function checkIfUserExists(uid: string): Promise<boolean> {
	const snapshot = await get(ref(FB_GAMEDB, PUBLIC_DATA_PATH));
	const data = snapshot.val();
	return data ? Object.prototype.hasOwnProperty.call(data, uid) : false;
}

// 👤 Get the currently authenticated user
function getCurrentUser(): User {
	const auth = getAuth();
	const user = auth.currentUser;

	if (!user) {
		throw new Error('No user is currently signed in.');
	}

	return user;
}

// 📥 Create user account in Firebase
async function createUserAccount(user: User, formData: Record<string, string>) {
	const uid = user.uid;

	const public_data = {
		username: formData.username
	};

	const private_data = {
		email: user.email || '',
		realName: user.displayName || '',
		gender: formData.gender || ''
	};

	try {
		await Promise.all([
			set(ref(FB_GAMEDB, `${PUBLIC_DATA_PATH}${uid}`), public_data),
			set(ref(FB_GAMEDB, `${USER_DATA_PATH}${uid}`), private_data)
		]);
	} catch (error) {
		console.error('Failed to create account in Firebase:', error);
		throw error;
	}
}
