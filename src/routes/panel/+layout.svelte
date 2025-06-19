<script lang="ts">
	import { goto } from '$app/navigation';
	import { FB_GAMEAPP } from '$lib/firebase';
	import { getAuth, signOut } from 'firebase/auth';
	let { children } = $props();

	const auth = getAuth(FB_GAMEAPP);
	const photoUrl = auth.currentUser?.photoURL;

	function logout() {
		signOut(getAuth());

		goto('/login');
	}
</script>

<div class="overflow-hidden">
	<nav
		class="relative m-3 mr-5 flex h-16 items-center justify-between overflow-visible rounded-2xl border-2 bg-amber-500 px-4"
	>
		<!-- Left: Button-style links -->
		<div class="flex space-x-4 select-none">
			<a href="./games" class="rounded bg-white px-4 py-2 text-black hover:bg-gray-200">Games</a>
			<a href="./leaderboard" class="rounded bg-white px-4 py-2 text-black hover:bg-gray-200"
				>Leaderboard</a
			>
			<a href="./settings" class="rounded bg-white px-4 py-2 text-black hover:bg-gray-200"
				>Settings</a
			>

			<!-- Modfy to be a button -->
			<button
				type="button"
				class="cursor-pointer rounded bg-white px-4 py-2 text-black hover:bg-gray-200"
				onclick={logout}>Logout</button
			>
		</div>

		<!-- Right: Overhanging user profile -->
		{#if photoUrl}
			<div class="absolute top-1/2 -right-4 -translate-y-1/2">
				<img
					src={photoUrl}
					alt="The current user's profile."
					class="h-20 w-20 rounded-full border-4 border-amber-500 shadow-lg select-none"
					referrerpolicy="no-referrer"
				/>
			</div>
		{/if}
	</nav>
</div>

{@render children()}
