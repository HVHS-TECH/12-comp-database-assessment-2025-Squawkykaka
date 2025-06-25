import { collectGames, type Game } from '$lib/gameStore';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	async function getCurrentGame() {
		const game_list = await collectGames();

		const current_game: Game | null =
			Object.values(game_list).find((game) => game.slug === params.slug) || null;

		return current_game;
	}

	const current_game = getCurrentGame();

	return {
		current_game
	};
}
