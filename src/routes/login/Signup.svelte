<!-- Signup -->

<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/index.js';
	import GenderDropdown from './GenderDropdown.svelte';
	import { signup } from './login';
</script>

<section
	class="flex w-80 flex-col justify-between rounded-2xl border-2 bg-orange-400 p-10 shadow-2xl"
>
	<form class="form" onsubmit={signup}>
		<h2>Sign Up</h2>

		<Input type="text" name="username" placeholder="Username" required id="username" />

		<!-- <label for="gender">Gender:</label>
		<select name="gender" id="gender">
			<option value="male">Male</option>
			<option value="female">Female</option>
			<option value="other">Other</option>
			<option value="prefer-not">Prefer not to say</option>
		</select> -->

		<GenderDropdown />

		<Button type="submit">Sign up with Google</Button>
	</form>
</section>
