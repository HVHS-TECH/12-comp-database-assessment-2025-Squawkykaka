<script lang="ts">
	let { data } = $props();

	const current_game = $derived(data.current_game);
</script>

{#if current_game}
	<h2>{current_game.title}</h2>
{/if}
