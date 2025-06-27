import { doc, getDoc, setDoc } from 'firebase/firestore';
import { fb_db } from './firebase';

// This throws an error if the user isnt logged in.
export function saveScoreToDatabase(game_id: string, user_id: string, score: number) {
	try {
		setDoc(doc(fb_db, `/games/${game_id}/score/${user_id}`), { score });
	} catch (error) {
		if (error instanceof Error) {
			console.error(`${error.name}: ${error.message}`);
		} else {
			console.error('An unknown error occurred:', error);
		}
	}
}

export async function getUserScore(game_id: string, user_id: string): Promise<number | undefined> {
	try {
		const userScoreRequest = await getDoc(doc(fb_db, 'games', game_id, 'scores', user_id));

		// Ensure the document exists and access the 'score' property
		const userData = userScoreRequest.data();
		console.log('Userdata: %d', userData);
		if (!userData || typeof userData.score !== 'number') {
			return 0;
			// throw new Error('Score not found or invalid.');
		}

		return userData.score;
	} catch (error) {
		if (error instanceof Error) {
			console.error(`${error.name}: ${error.message}`);
		} else {
			console.error('An unknown error occurred:', error);
		}
	}
}

export async function incrementScoreToDatabase(
	game_id: string,
	user_id: string,
	score_to_add: number
) {
	try {
		let currentScore = await getUserScore(game_id, user_id);

		// Find some way to "bubble" errors better so we can access lower level errors from up top.
		if (currentScore === undefined) {
			currentScore = 0;
		}

		console.log(currentScore);
		const newScore = currentScore + score_to_add;

		await setDoc(doc(fb_db, 'games', game_id, 'scores', user_id), { score: newScore });
	} catch (error) {
		if (error instanceof Error) {
			console.error(`${error.name}: ${error.message}`);
		} else {
			console.error('An unknown error occurred:', error);
		}
	}
}
