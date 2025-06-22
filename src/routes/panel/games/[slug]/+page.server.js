import { fb_db } from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function load({ params }) {
	// TODO move this into a store so we dont have to fetch games multiple times
	const gameRef = collection(fb_db, 'games');
	const gameSnap = await getDocs(gameRef);

	const game_list = gameSnap.docs.map((doc) => ({
		title: doc.data().title,
		image: doc.data().image,
		slug: doc.data().slug,
		description: doc.data().description,
		url: doc.data().url
	}));

	const current_game = game_list.find((game) => game.slug === params.slug) || null;

	return {
		current_game
	};
}
