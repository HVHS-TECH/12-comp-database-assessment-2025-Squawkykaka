import { readable } from 'svelte/store';
// import * as games from '$lib/games.json';
const games: { default: GamesCollection } = await import('$lib/games.json');

/**
 * Describes a game and all data needed to display one.
 */
export interface Game {
	/**
	 * The path of the game in firebase.
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
export type GamesCollection = Game[];

/**
 * A  store which contains the list of games.
 */
export const gameList = readable<GamesCollection>(games.default);
