import { writable } from 'svelte/store';

interface AuthUser {
	uid: string;
	email: string;
}

/**
 * Store for a currently signed in user. Filled in on page reload.
 */
export const authUser = writable<AuthUser | undefined>(undefined);
