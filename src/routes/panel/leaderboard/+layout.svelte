<script lang="ts">
	import { collectGames } from '$lib/gameStore';
	let { children } = $props();
</script>

{#await collectGames()}
	<p>Getting Games</p>
{:then games}
	<div class="flex">
		<aside class="flex w-1/4 flex-col flex-nowrap gap-1 rounded-2xl bg-orange-100">
			{#each games as game}
				<a
					href="/panel/leaderboard/{game.slug}"
					class="h-fit w-full rounded-xl border-2 bg-white p-2 text-center">{game.title}</a
				>
			{/each}
		</aside>

		<div class="w-full bg-amber-500">
			{@render children()}
		</div>
	</div>
{/await}
