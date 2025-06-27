const { collection, getDocs, limit, orderBy, query } = await import('firebase/firestore');
import { writable } from 'svelte/store';
import { fb_db } from './firebase';

// Type for a single game, user id and score.
export interface GameScores {
	[id: string]: {
		score: number;
	};
}

// Type for all games, a collection containing multiple games.
export interface GameScoresList {
	[game_id: string]: GameScores;
}

// This is a store which contains currently fetched game leaderboards.
export const leaderBoardScores = writable<GameScoresList | undefined>(undefined);

/**
 * function to fetch the scores of a specific game, then save it in a store
 * so that if we navigate to another and back, we dont fetch data twice
 *
 * @remarks This function is a work in progress.
 * @param game_id The id for game, the same one as defined in Game
 * @returns
 */
export async function getGameScores(game_id: string) {
	// Check if current game already has data fetched, if so return.
	let currentGameScores: GameScoresList | undefined;
	leaderBoardScores.subscribe((value) => {
		currentGameScores = value;
	});

	// If currentGameScores is undefined it means we need to fecth data.
	if (currentGameScores == undefined) {
		const gameScore = await fb_fetchGameScore(game_id);

		console.log(gameScore);

		currentGameScores = {
			game_id: {}
		};

		return currentGameScores;
	}

	// If not, get scores data.

	// Append score data to store.

	// Return.
}

// This function fetches the scores from firebase without any checks, used in getGameScores for actually fetching data.
async function fb_fetchGameScore(game_id: string) {
	const scoreQuery = query(
		collection(fb_db, `games/${game_id}/scores`), // Path to the scores subcollection
		orderBy('score', 'desc'), // Order by score in descending order
		limit(10) // Limit to top 10 scores
	);

	const topScores = getDocs(scoreQuery);

	return (await topScores).docs;
}
