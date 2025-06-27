<script lang="ts">
	let { data } = $props();

	// console.log(data.current_game.id);
	// // getGameScores(data.current_game.id);

	// // const topScoresPromise = getDocs(scoreQuery);

	// const score_display = data.current_game.scoreDisplay;
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
		<tr>
			<th scope="row">Bobthebuilder</th>
			<td>22</td>
		</tr>
	</tbody>
</table>
