import { collection, getDocs, limit, query } from 'firebase/firestore';
import { writable } from 'svelte/store';
import { fb_db } from './firebase';

export interface ScoreDisplay {
	[key: string]: {
		displayName: string;
	};
}

// Figure out types for score display
export interface Game {
	id: string; // The path the game is stored under in firebase
	url: string; // Url to go to when clicked
	image: string; // Image to display
	slug: string; // The subpath of the game, e.g. /games/rickroll
	title: string; // The display name of the game.
	description: string; // the description, appears below in the title.
	scoreDisplay?: ScoreDisplay; // The way the score is displayed in the leaderboard.
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

	const gameQuery = query(collection(fb_db, 'games'), limit(10));
	const gameSnap = await getDocs(gameQuery);

	const game_list: GamesCollection = gameSnap.docs.map((game) => {
		const data = game.data();

		return {
			id: data.id,
			title: data.title,
			image: data.image,
			slug: data.slug,
			description: data.description,
			url: data.url,
			scoreDisplay: data.scoreDisplay ?? undefined // Ensure undefined if missing
		};
	});

	gameList.set(game_list);

	return game_list;
}
