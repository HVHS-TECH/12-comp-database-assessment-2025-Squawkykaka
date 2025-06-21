<script lang="ts">
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';

	let { data } = $props();

	if (data.current_game) {
		window.location.href = data.current_game.url;
	} else {
		error(404, {
			message: 'Game not found'
		});
	}
</script>

<div class="loading">
	<p>Redirecting to the game...</p>
</div>

{#if page.error}
	<h1>{page.status}: {page.error.message}</h1>
{/if}
