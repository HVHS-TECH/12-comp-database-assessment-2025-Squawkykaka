import { collectGames } from '$lib/gameStore';

export async function load({ params }) {
	const game_list = await collectGames();

	// THis function returns the game whos slug is equal to the current page, or null which means the game doesnt exist.
	const current_game = Object.values(game_list).find((game) => game.slug === params.slug) || null;

	return {
		current_game
	};
}
