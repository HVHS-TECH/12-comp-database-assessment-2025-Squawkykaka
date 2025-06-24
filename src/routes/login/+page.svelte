<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { fb_auth } from '$lib/firebase';
	import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';

	let email: string = $state('');
	let password: string = $state('');

	let success: boolean | undefined = $state(undefined);
	let errorCode: string | undefined = $state(undefined);
	let errorMessage: string | undefined = $state(undefined);

	const login = () => {
		signInWithEmailAndPassword(fb_auth, email, password)
			.then(() => {
				goto('/panel/games');
			})
			.catch((error) => {
				errorCode = error.code;
				errorMessage = error.message;
				console.log(errorCode, errorMessage);

				success = false;
			});
	};
</script>

<div class="flex min-h-[100vh] flex-col items-center justify-center text-center">
	<h1 class="mb-10 font-sans text-5xl font-bold">Squawky's Super Cool Gamez</h1>

	<!-- Signup -->
	<div
		class="flex w-80 flex-col flex-wrap justify-between gap-10 rounded-2xl border-2 bg-orange-400 p-10 shadow-2xl"
	>
		<h2>Login</h2>

		<form onsubmit={login}>
			<Input type="email" placeholder="Email" required class="w-full" bind:value={email} />
			<Input type="password" placeholder="Password" required class="w-full" bind:value={password} />

			<Button class="w-full" type="submit">Login</Button>
		</form>

		<p class="mt-4 text-sm">
			Dont have an account? <a href="/register" class="text-blue-500">Register</a>
		</p>

		{#if !success && success !== undefined}
			{#if errorCode === AuthErrorCodes.ADMIN_ONLY_OPERATION}
				<p class="text-red-500">This operation is only available to admins.</p>
			{:else if errorCode === AuthErrorCodes.INVALID_EMAIL}
				<p class="text-red-500">Invalid email address.</p>
			{:else if errorCode === AuthErrorCodes.USER_DISABLED}
				<p class="text-red-500">This user has been disabled.</p>
			{:else if errorCode === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS}
				<p class="text-red-500">No user found with this email.</p>
			{:else if errorCode === AuthErrorCodes.INVALID_PASSWORD}
				<p class="text-red-500">Incorrect password.</p>
			{:else}
				<p class="text-red-500">{errorMessage}</p>
			{/if}
		{/if}
	</div>
</div>
Y
