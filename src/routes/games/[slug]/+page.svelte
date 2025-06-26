<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';

	// Get the current game from the server.
	const { data } = $props();

	let isLoading = $state(true); // Track loading state

	// Checks if the game is not null, if it isnt, net loading to false and redirect to game.
	async function redirectToGame() {
		if (data.current_game) {
			isLoading = false; // Stop loading
			window.location.href = data.current_game.url; // Redirect to the game
		} else {
			// Otherwise show a 404 screen.
			isLoading = false; // Stop loading
			error(404, {
				message: 'Game not found'
			});
		}
	}

	if (browser) {
		redirectToGame();
	}
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
