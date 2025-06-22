import { collection, getDocs } from 'firebase/firestore';
import { writable } from 'svelte/store';
import { fb_db } from './firebase';

interface Game {
	url: string;
	image: string;
	slug: string;
	title: string;
	description: string;
}

// Modify GamesCollection to allow an array of games
type GamesCollection = Game[];

// Update the writable store to match the new type
export const gameList = writable<GamesCollection | undefined>(undefined);

export async function collectGames() {
	let gameListValue;

	gameList.subscribe((value) => {
		gameListValue = value;
	})();

	if (gameListValue && gameList) {
		return gameListValue; // Return existing game list if already filled
	}

	const gameRef = collection(fb_db, 'games');
	const gameSnap = await getDocs(gameRef);

	const game_list = gameSnap.docs.map((game) => ({
		title: game.data().title,
		image: game.data().image,
		slug: game.data().slug,
		description: game.data().description,
		url: game.data().url
	}));

	gameList.set(game_list);

	return game_list;
}
