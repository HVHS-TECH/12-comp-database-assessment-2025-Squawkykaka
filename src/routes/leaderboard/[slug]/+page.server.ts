import { gameList } from '$lib/gameStore';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function load({ params }) {
	const game_list = get(gameList);

	const current_game = game_list.find((game) => game.slug === params.slug) || null;

	if (!current_game) {
		error(404, 'That game does not exist.');
	}

	return current_game;
}
