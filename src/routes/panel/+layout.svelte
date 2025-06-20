<script lang="ts">
	import { goto } from '$app/navigation';
	import { authUser } from '$lib/authStore';
	import { fb_auth } from '$lib/firebase';
	import { signOut } from 'firebase/auth';
	let { children } = $props();

	const handleLogout = () => {
		signOut(fb_auth)
			.then(() => {
				$authUser = undefined;
				goto('/login');
			})
			.catch((error) => {
				console.log(error);
			});
	};
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
				onclick={handleLogout}>Logout</button
			>
		</div>
	</nav>
</div>

{@render children()}
