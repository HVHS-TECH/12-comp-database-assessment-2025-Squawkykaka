import { games } from '../games.js';

export function load({ params }) {
	const current_game = games.find((game) => game.slug === params.slug);

	return {
		current_game
	};
}