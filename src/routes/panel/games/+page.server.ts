import { collection, getDocs } from 'firebase/firestore';
import { fb_db } from '$lib/firebase.js';

export async function load() {
	const gameRef = collection(fb_db, 'games');
	const gameSnap = await getDocs(gameRef);

	const game_list = gameSnap.docs.map((doc) => ({
		title: doc.data().title,
		image: doc.data().image,
		slug: doc.data().slug,
		description: doc.data().description,
		url: doc.data().url
	}));

	return {
		game_list
	};
}
