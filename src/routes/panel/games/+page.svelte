<!--
Make a section for each game that contains an screenshot for each game.
If the game is clicked go to a page for that game which is fullscreen
-->

<script lang="ts">
	import { goto } from '$app/navigation';

	let { data } = $props();
</script>

<div class="mx-auto box-border grid max-w-full grid-cols-3 grid-rows-3 gap-4 overflow-x-hidden p-4">
	{#each data.game_list as { title, image, slug, description }}
		<button onclick={() => goto(`/panel/games/${slug}`)} class="cursor-pointer">
			<section class="box-border border-4">
				<h2 class="text-center text-2xl">{title}</h2>
				<img src={image} alt="A game" class="h-100 w-full object-cover" />
				<p>{description}</p>
			</section>
		</button>
	{/each}
</div>
