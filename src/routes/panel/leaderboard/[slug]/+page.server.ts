import { collectGames } from '$lib/gameStore';

export async function load({ params }) {
	async function getCurrentGame() {
		const game_list = await collectGames();

		const current_game = game_list.find((game) => game.slug === params.slug) || null;

		return current_game;
	}

	const current_game = await getCurrentGame();

	return {
		current_game
	};
}
