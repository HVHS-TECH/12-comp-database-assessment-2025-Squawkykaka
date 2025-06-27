<script lang="ts">
	import { getGameScores } from '$lib/scoreStore.js';
	let { data } = $props();

	const scores = $derived(getGameScores(data.id));
</script>

<div class="container mx-auto p-6">
	<h2 class="mb-6 text-center text-3xl font-bold text-gray-800">{data.title}</h2>

	<div class="overflow-hidden rounded-lg shadow-lg">
		<table class="min-w-full bg-white">
			<thead class="bg-gradient-to-r from-blue-500 to-purple-600">
				<tr>
					<th
						scope="col"
						class="px-6 py-4 text-left text-sm font-semibold tracking-wider text-white uppercase"
					>
						Username
					</th>
					<th
						scope="col"
						class="px-6 py-4 text-left text-sm font-semibold tracking-wider text-white uppercase"
					>
						{data.scoreDisplay.displayName}
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				{#await scores}
					<tr class="bg-gray-50">
						<td colspan="2" class="px-6 py-8 text-center text-gray-500">
							<div class="flex items-center justify-center space-x-2">
								<div
									class="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"
								></div>
								<span>Loading scores...</span>
							</div>
						</td>
					</tr>
				{:then current_game_scores}
					{#if current_game_scores !== undefined}
						{#each Object.entries(current_game_scores) as [userId, scoreData], index}
							<tr
								class="transition-colors duration-200 hover:bg-gray-50 {index % 2 === 0
									? 'bg-white'
									: 'bg-gray-25'}"
							>
								<th scope="row" class="px-6 py-4 text-sm font-medium text-gray-900">
									<div class="flex items-center space-x-3">
										<span
											class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-white"
										>
											{index + 1}
										</span>
										<span>{scoreData.username}</span>
									</div>
								</th>
								<td class="px-6 py-4 text-sm font-semibold text-gray-700">
									{scoreData.score}
								</td>
							</tr>
						{/each}
					{:else}
						<tr>
							<td colspan="2" class="px-6 py-8 text-center text-gray-500">
								No scores available for this game.
							</td>
						</tr>
					{/if}
				{:catch error}
					<tr class="bg-red-50">
						<td colspan="2" class="px-6 py-8 text-center text-red-600">
							Error loading scores: {error.message}
						</td>
					</tr>
				{/await}
			</tbody>
		</table>
	</div>
</div>
