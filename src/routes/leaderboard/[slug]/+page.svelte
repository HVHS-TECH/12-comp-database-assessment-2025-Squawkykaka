<script lang="ts">
	import { getGameScores } from '$lib/scoreStore.js';
	let { data } = $props();

	const scores = $derived(getGameScores(data.id));
</script>

<h2>{data.title}</h2>
<table>
	<thead>
		<tr>
			<th scope="col">Username</th>
			<th scope="col">{data.scoreDisplay.displayName}</th>
		</tr>
	</thead>
	<tbody>
		{#await scores}
			<tr>
				<th>Loading scores...</th>
			</tr>
		{:then current_game_scores}
			{#if current_game_scores !== undefined}
				{#each Object.entries(current_game_scores) as [userId, scoreData]}
					<tr>
						<th scope="row">{scoreData.username}</th>
						<td>{scoreData.score}</td>
					</tr>
				{/each}
			{/if}
		{/await}
	</tbody>
</table>
