import { collection, doc, getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { get, writable } from 'svelte/store';
import { fb_db } from './firebase';

// Type for a single game, user id and score.
export interface GameScores {
	[user_id: string]: {
		username: string;
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
 * Fetches the scores of a specific game and saves them in the store.
 * If the scores are already fetched, it returns them directly.
 *
 * @param game_id The id of the game.
 * @returns The scores for the specified game.
 */
export async function getGameScores(game_id: string): Promise<GameScores> {
	// Get the current state of the leaderboard scores store.
	const currentGameScores = get(leaderBoardScores);

	// If the scores for the game are already fetched, return them.
	if (currentGameScores && currentGameScores[game_id]) {
		return currentGameScores[game_id];
	}

	// Fetch the scores from Firebase.
	const gameScore = await fb_fetchGameScores(game_id);

	// Update the store with the fetched scores.
	leaderBoardScores.update((scores) => {
		return {
			...scores,
			[game_id]: gameScore
		};
	});

	// Return the fetched scores.
	return gameScore;
}

/**
 * Fetches the scores from Firebase without any checks.
 *
 * @param game_id The id of the game.
 * @returns The top scores for the specified game.
 */
async function fb_fetchGameScores(game_id: string): Promise<GameScores> {
	const scoreQuery = query(
		collection(fb_db, `games/${game_id}/scores`), // Correct path to the scores subcollection
		orderBy('score', 'desc'), // Order by score in descending order
		limit(10) // Limit to top 10 scores
	);

	// Get top scores.
	const topScores = await getDocs(scoreQuery);

	// Convert Firestore data into a usable format with usernames.
	const scorePromises = topScores.docs.map(async (scoreDoc) => {
		// Get username for current user
		const userDoc = await getDoc(doc(fb_db, 'users', scoreDoc.id));
		const username = userDoc.exists() ? userDoc.data().username : 'Unknown User';

		return {
			userId: scoreDoc.id,
			username: username,
			score: scoreDoc.data().score
		};
	});

	// Wait for all user data to be fetched
	const scoresWithUsernames = await Promise.all(scorePromises);

	// Build the final GameScores object
	const gameScores: GameScores = {};
	scoresWithUsernames.forEach(({ userId, username, score }) => {
		gameScores[userId] = {
			username: username,
			score: score
		};
	});

	return gameScores;
}
