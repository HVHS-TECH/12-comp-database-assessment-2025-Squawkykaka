import { writable } from 'svelte/store';

interface Game {
	url: string;
	image: string;
	slug: string;
	title: string;
	description: string;
}

interface GamesCollection {
	[key: string]: Game;
}

export const gameList = writable<GamesCollection | undefined>(undefined);
