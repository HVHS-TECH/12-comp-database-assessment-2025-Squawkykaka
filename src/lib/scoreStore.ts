import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
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

// Update the writable store to match the new type
export const leaderBoardScores = writable<GameScoresList | undefined>(undefined);

export async function getGameScores(game_id: string) {
	// Check if current game already has data fetched, if so return.
	let currentGameScores: GameScoresList | undefined;
	leaderBoardScores.subscribe((value) => {
		currentGameScores = value;
	});

	// If currentGameScores is undefined it means we need to fecth data.
	if (currentGameScores == undefined) {
		const gameScore = await getGameScore(game_id);

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

async function getGameScore(game_id: string) {
	const scoreQuery = query(
		collection(fb_db, `games/${game_id}/scores`), // Path to the scores subcollection
		orderBy('score', 'desc'), // Order by score in descending order
		limit(10) // Limit to top 10 scores
	);

	const topScores = getDocs(scoreQuery);

	return (await topScores).docs;
}
