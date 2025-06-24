import { collectGames, type Game } from '$lib/gameStore';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	async function getCurrentGame() {
		const game_list = await collectGames();

		const current_game: Game | null = game_list.find((game) => game.slug === params.slug) || null;

		return current_game;
	}

	const current_game = await getCurrentGame();

	if (!current_game) {
		error(404, 'That game does not exist');
	}

	return {
		current_game
	};
}
