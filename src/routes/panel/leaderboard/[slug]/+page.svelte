<script lang="ts">
	let { data } = $props();
</script>

<h2>Game: ...</h2>

{#await data.current_game}
	<h2>Game: ...</h2>
{:then current_game}
	<p>{current_game}</p>
{/await}
