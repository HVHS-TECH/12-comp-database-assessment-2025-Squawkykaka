<script lang="ts">
	import { gameList } from '$lib/gameStore';
	import { get } from 'svelte/store';

	let { children } = $props();

	let game_list = get(gameList);
</script>

<div class="flex">
	<!-- Make a sidebar button for each game -->
	<aside class="flex w-1/4 flex-col flex-nowrap gap-1 rounded-2xl bg-orange-100">
		{#each game_list as game}
			<a
				href="/leaderboard/{game.slug}"
				class="h-fit w-full rounded-xl border-2 bg-white p-2 text-center">{game.title}</a
			>
		{/each}
	</aside>

	<!-- Render the child page to the right. -->
	<div class="w-full bg-amber-500">
		{@render children()}
	</div>
</div>
