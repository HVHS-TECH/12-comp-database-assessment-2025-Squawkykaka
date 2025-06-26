<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import GenderDropdown from './GenderDropdown.svelte';
	import { fb_auth, fb_db } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import { setDoc, doc, getDocs, query, collection, where } from 'firebase/firestore';

	class UserNameInUseError extends Error {
		constructor(message: string | undefined) {
			super(message);
			this.name = 'UserNameInUseError';
		}
	}

	let email: string = $state('');
	let name: string = $state('');
	let password: string = $state('');
	let username: string = $state('');
	let gender: string = $state('');

	let success: boolean | undefined = $state(undefined);
	let errorCode: string | undefined = $state(undefined);
	let errorMessage: string | undefined = $state(undefined);

	const register = async () => {
		try {
			// Query any users with the users username choice.
			const usersWithSelectedUsername = await getDocs(
				query(collection(fb_db, 'users'), where('username', '==', username))
			);
			// Error is thats the case.
			if (usersWithSelectedUsername.docs.length >= 1) {
				throw new UserNameInUseError('Username is already in use.');
			}

			// Create user.
			let userCredential = await createUserWithEmailAndPassword(fb_auth, email, password);

			// Sets public data in a readable path
			await setDoc(doc(fb_db, 'users', userCredential.user.uid), {
				username: username,
				registered: new Date().toISOString()
			});

			// Set private data in a non-readable path.
			await setDoc(doc(fb_db, 'usersPrivate', userCredential.user.uid), {
				name: name,
				gender: gender
			});

			// Dumb check thats necissary.
			if (!userCredential.user.email) throw new Error('Email is null');

			console.log('User registered successfully');

			goto('/games');
		} catch (error: any) {
			errorCode = error.code;
			errorMessage = error.message;
			console.log(errorCode, errorMessage);

			success = false;
		}
	};
</script>

<div class="flex min-h-[100vh] flex-col items-center justify-center text-center">
	<h1 class="mb-10 font-sans text-5xl font-bold">Squawky's Super Cool Gamez</h1>

	<!-- Signup -->
	<section
		class="flex w-80 flex-col justify-between rounded-2xl border-2 bg-orange-400 p-10 shadow-2xl"
	>
		<h2>Sign Up</h2>

		<form
			onsubmit={(e) => {
				e.preventDefault();
				register();
			}}
		>
			<Input type="text" placeholder="Name" required bind:value={name} />
			<Input type="text" placeholder="Username" required bind:value={username} />
			<Input type="email" placeholder="Email" required bind:value={email} />
			<Input type="password" placeholder="Password" required bind:value={password} />

			<GenderDropdown bind:value={gender} />

			<Button type="submit" class="w-full">Signup</Button>
		</form>

		<p class="mt-4 text-sm">
			Already have an account? <a href="/login" class="text-blue-500">Login</a>
		</p>

		<!-- Use AuthErrorCodes to see errors -->
		{#if !success && success !== undefined}
			{#if errorCode === 'auth/email-already-in-use'}
				<p class="text-red-500">This email is already registered.</p>
			{:else if errorCode === 'auth/invalid-email'}
				<p class="text-red-500">The email address is not valid.</p>
			{:else if errorCode === 'auth/weak-password'}
				<p class="text-red-500">The password is too weak.</p>
			{:else if errorMessage === 'Username is already in use.'}
				<p class="text-red-500">Username is already in use.</p>
			{:else}
				<p class="text-red-500">An unknown error occurred. Please try again.</p>
			{/if}
		{/if}
	</section>
</div>
