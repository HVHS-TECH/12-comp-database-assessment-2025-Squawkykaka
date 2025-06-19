<script lang="ts">
	let { data } = $props();

	// window.location.href = data.current_game?.url || '/panel/games';
</script>

hello
{#if data.current_game}
	<div>
		<iframe
			src={data.current_game.url}
			frameborder="0"
			title={data.current_game.title}
			height="800"
			width="800"
		></iframe>

		<iframe
			title={data.current_game.title}
			src="mypage.html"
			style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
		>
			Your browser doesn't support iframes
		</iframe>
	</div>
{/if}
