import { authUser } from '$lib/authStore';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// This function protects this page from non-logged in users.
// TODO, it actually does as its client side xd
export const load: PageLoad = async () => {
	const unsubscribe = authUser.subscribe((user) => {
		if (!user) {
			throw redirect(302, '/login');
		}
	});

	unsubscribe();

	return {};
};
