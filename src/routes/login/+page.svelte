<script>
	import Login from './Login.svelte';
	import Signup from './Signup.svelte';
</script>

<div class="flex min-h-[100vh] flex-col items-center justify-center text-center">
	<h1 class="mb-10 font-sans text-5xl font-bold">Squawky's Super Cool Gamez</h1>

	<!-- Signup -->
	<div class="flex flex-wrap justify-center gap-10">
		<Signup />
		<Login />
	</div>
</div>
