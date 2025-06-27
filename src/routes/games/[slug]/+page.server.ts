import { gameList, type GamesCollection } from '$lib/gameStore';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function load({ params }) {
	try {
		const games: GamesCollection = get(gameList);

		// If the store is empty, throw a 404 error
		if (!games || Object.keys(games).length === 0) {
			throw error(404, 'Games not found.');
		}

		// Find the current game by slug
		const current_game = games.find((game) => game.slug === params.slug) || null;

		// If the game is not found, throw a 404 error
		if (!current_game) {
			throw error(404, 'This game could not be found.');
		}

		// Return the current game
		return { current_game };
	} catch (err) {
		console.error('Error loading game:', err);
		throw error(500, 'Failed to load game');
	}
}
