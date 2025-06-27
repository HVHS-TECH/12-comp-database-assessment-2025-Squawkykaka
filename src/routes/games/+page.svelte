<!--
Make a section for each game that contains an screenshot for each game.
If the game is clicked go to a page for that game which is fullscreen
-->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { gameList } from '$lib/gameStore.js';
</script>

<div class="mx-auto box-border grid max-w-full grid-cols-3 gap-4 overflow-x-hidden p-4">
	<!-- For each game, extract the data -->
	{#each $gameList as { id, title, image, slug, description }}
		<!-- Make a button containing picture, title, id -->
		<button onclick={() => goto(`/games/${slug}`)} class="cursor-pointer">
			<section class="box-border rounded-lg border-4 shadow-lg transition-shadow hover:shadow-xl">
				<h2 class="text-center text-2xl font-bold">{title}</h2>
				<img
					src={image}
					alt={title}
					fetchpriority="high"
					class="h-80 w-full rounded-t-lg object-cover"
				/>
				<p class="p-2 text-sm text-gray-700">{description}</p>
			</section>
		</button>
	{/each}
</div>
