import { collection, getDocs, limit, query } from 'firebase/firestore';
import { writable } from 'svelte/store';
import { fb_db } from './firebase';

export interface ScoreDisplay {
	displayName: string;
}

// Figure out types for score display
export interface Game {
	id: string; // The path the game is stored under in firebase
	url: string; // Url to go to when clicked
	image: string; // Image to display
	slug: string; // The subpath of the game, e.g. /games/rickroll
	title: string; // The display name of the game.
	description: string; // the description, appears below in the title.
	scoreDisplay: ScoreDisplay; // The way the score is displayed in the leaderboard.
}

// Modify GamesCollection to allow an array of games
type GamesCollection = { [id: string]: Game };

// Update the writable store to match the new type
export const gameList = writable<GamesCollection | undefined>(undefined);

export async function collectGames() {
	let gameListValue;

	gameList.subscribe((value) => {
		gameListValue = value;
	})();

	if (gameListValue && Object.keys(gameListValue).length > 0) {
		return gameListValue; // Return existing game list if already filled
	}

	const gameQuery = query(collection(fb_db, 'games'), limit(10));
	const gameSnap = await getDocs(gameQuery);

	const game_list = gameSnap.docs.reduce((acc, doc) => {
		acc[doc.id] = {
			id: doc.id,
			title: doc.data().title,
			image: doc.data().image,
			slug: doc.data().slug,
			description: doc.data().description,
			url: doc.data().url,
			scoreDisplay: doc.data().scoreDisplay
		};
		return acc;
	}, {} as GamesCollection);

	gameList.set(game_list);

	return game_list;
}
