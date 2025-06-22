<script lang="ts">
	import { page } from '$app/state';
	import { collectGames } from '$lib/gameStore.js';
	import { error } from '@sveltejs/kit';

	let isLoading = $state(true); // Track loading state
	let currentGame;

	async function redirectToGame() {
		const games = await collectGames();
		currentGame = games.find((game) => game.slug === page.params.slug);

		if (currentGame) {
			isLoading = false; // Stop loading
			window.location.href = currentGame.url; // Redirect to the game
		} else {
			isLoading = false; // Stop loading
			error(404, {
				message: 'Game not found'
			});
		}
	}

	redirectToGame();
</script>

{#if isLoading}
	<p>Loading...</p>
	<!-- Display loading message -->
{:else}
	<!-- Redirect logic handled in script -->
{/if}

{#if page.error}
	<h1>{page.status}: {page.error.message}</h1>
{/if}
