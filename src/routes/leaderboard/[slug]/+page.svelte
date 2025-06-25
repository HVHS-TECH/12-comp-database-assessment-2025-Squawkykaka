<script lang="ts">
	import { fb_db } from '$lib/firebase.js';
	import { getGameScores } from '$lib/scoreStore.js';
	import { collection, limit, query, orderBy, getDocs } from 'firebase/firestore';

	let { data } = $props();

	// console.log(data.current_game.id);
	// // getGameScores(data.current_game.id);

	// // const topScoresPromise = getDocs(scoreQuery);

	// const score_display = data.current_game.scoreDisplay;
</script>

{#await data.current_game then current_game}
	{#if !current_game}
		This game doesnt exist.
	{:else}
		<h2>{current_game.title}</h2>

		<table>
			<thead>
				<tr>
					<th scope="col">Username</th>
					<th scope="col">{current_game.scoreDisplay.displayName}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Bobthebuilder</th>
					<td>22</td>
				</tr>
			</tbody>
		</table>
	{/if}
{/await}
