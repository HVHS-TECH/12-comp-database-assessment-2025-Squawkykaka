<script lang="ts">
	import { collectGames } from '$lib/gameStore';
	let { children } = $props();
</script>

{#await collectGames()}
	<p>Getting Games</p>
{:then games}
	<div class="grid grid-cols-2">
		<aside class="flex w-1/4 rounded-2xl bg-orange-100">
			{#each games as game}
				<a
					href="/panel/leaderboard/{game.slug}"
					class="m-2 h-fit w-full rounded-xl border-2 bg-white p-2 text-center">{game.title}</a
				>
			{/each}
		</aside>

		<div class="flex-grow bg-amber-500">
			{@render children()}
		</div>
	</div>
{/await}
