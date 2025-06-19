import { getAuth } from 'firebase/auth';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load: PageLoad = () => {
	const auth = getAuth();

	// TODO: this runs when initialising so always false.
	// if (!auth.currentUser) {
	// 	redirect(307, '/login');
	// }
};
