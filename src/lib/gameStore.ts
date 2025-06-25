import { collection, getDocs, limit, query } from 'firebase/firestore';
import { writable } from 'svelte/store';
import { fb_db } from './firebase';

/**
 * Describes a game and all data needed to display one.
 */
export interface Game {
	/**
	 * The randomly generated string for the games path.
	 */
	id: string;

	/**
	 * The url where the game is located.
	 */
	url: string;

	/**
	 * The location of the image for use in displaying titles
	 */
	image: string;

	/**
	 * The short human readable id used for routes.
	 * @example
	 * ```mk
	 * bear-attack
	 * ```
	 */
	slug: string;

	/**
	 * The display name for the game.
	 * @example
	 * ```mk
	 * Bear Attack
	 * ```
	 *
	 * @remarks
	 * Displayed above the image.
	 */
	title: string;

	/**
	 * Description used for the game
	 *
	 * @remarks
	 * displayed below the image card.
	 */
	description: string;

	/**
	 * The human readable description on what the score
	 * value for this game should be displayed as.
	 *
	 * @example
	 * ```json
	 * {
	 * 	"scoreDisplay": {
	 * 	 "displayName": "Time Survived"
	 * 	}
	 * }
	 * ```
	 */
	scoreDisplay: {
		displayName: string;
	}; // The way the score is displayed in the leaderboard.
}

// Modify GamesCollection to allow an array of games
type GamesCollection = { [id: string]: Game };

/**
 * A writable svelte store which contains the list of game currently existing. Use collectGames() instead.
 *
 * @remarks
 * This doesnt need to be exported as it should be used via collectGames() as that function automatically
 * fetches games is there are none currently filled. This is needed so that a firebase get request
 * isnt sent every time you navigate.
 */
const gameList = writable<GamesCollection | undefined>(undefined);

/**
 * Returns a promise for a list the games currently existing.
 * @example
 * Returns GameCollection for use in displaying.
 * ```ts
 * const games = await collectGames();
 * ```
 *
 * @returns The current games fetched from firebase.
 */
export async function collectGames(): Promise<GamesCollection> {
	let gameListValue;

	// Subscribe to the store value in order to check it.
	gameList.subscribe((value) => {
		gameListValue = value;
	})();

	// If the store isnt null and already filled with game data return the games.
	if (gameListValue && Object.keys(gameListValue).length > 0) {
		return gameListValue; // Return existing game list if already filled
	}

	// If that isnt the case, fetch 10 games form the database
	const gameQuery = query(collection(fb_db, 'games'), limit(10));
	const gameSnap = await getDocs(gameQuery);

	// Convert the returned firebase data into a GameCollection.
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

	// Set the value into the store if we fetch data later.
	gameList.set(game_list);

	// Returns the filled GameCollection
	return game_list;
}
