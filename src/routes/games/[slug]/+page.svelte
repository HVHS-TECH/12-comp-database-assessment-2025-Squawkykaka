<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { authUser } from '$lib/authStore.js';
	import { incrementScoreToDatabase } from '$lib/updateScores.js';
	import { error } from '@sveltejs/kit';
	import { get } from 'svelte/store';

	// Get the current game from the server.
	const { data } = $props();
	const user = get(authUser);

	// Checks if the game is not null, if it isnt, net loading to false and redirect to game.
	async function redirectToGame() {
		// Add a score to the database on getting rickrolled
		if (data.current_game.slug === 'rickroll') {
			// Check if user is defined before calling incrementScoreToDatabase
			if (user && user.uid) {
				await incrementScoreToDatabase(data.current_game.id, user.uid, 1);
			}
		}

		// Redirect to the game.
		if (data.current_game) {
			window.location.href = data.current_game.url; // Redirect to the game
		} else {
			// Otherwise show a 404 screen.
			error(404, {
				message: 'Game not found'
			});
		}
	}

	if (browser) {
		redirectToGame();
	}
</script>

Loading slowlyyyyy...

{#if page.error}
	<h1>{page.status}: {page.error.message}</h1>
{/if}
