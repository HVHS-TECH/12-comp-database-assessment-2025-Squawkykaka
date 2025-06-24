<script lang="ts">
	import { goto } from '$app/navigation';
	import { authUser } from '$lib/authStore';
	import { fb_auth } from '$lib/firebase';
	import { signOut } from 'firebase/auth';
	import '../app.css';

	let { children } = $props();

	const handleLogout = () => {
		signOut(fb_auth)
			.then(() => {
				goto('/login');
			})
			.catch((error) => {
				console.log(error);
			});
	};
</script>

<div class="overflow-hidden">
	<nav
		class="relative m-3 mr-5 flex h-16 items-center justify-between space-x-4 overflow-visible rounded-2xl border-2 bg-amber-500 px-4 select-none"
	>
		<a href="/games">Games</a>
		<a href="/leaderboard">Leaderboard</a>
		{#if $authUser}
			<a href="/settings">Settings</a>

			<button
				type="button"
				class="cursor-pointer rounded bg-white px-4 py-2 text-black hover:bg-gray-200"
				onclick={handleLogout}>Logout</button
			>
		{:else if $authUser === undefined}
			<a href="/register">Register</a>
			<a href="/login">Login</a>
		{/if}
	</nav>
</div>

{@render children()}

<style>
	@reference "tailwindcss";
	a {
		@apply rounded bg-white px-4 py-2 text-black hover:bg-gray-200;
	}
</style>
