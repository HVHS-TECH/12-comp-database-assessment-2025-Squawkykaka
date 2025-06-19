<script>
	import { Button } from '$lib/components/ui/button';
	import { login } from './login';
</script>

<!-- Login -->
<section
	class="flex w-80 flex-col justify-between rounded-2xl border-2 bg-orange-400 p-10 shadow-2xl"
>
	<h2>Login</h2>

	<div class="flex grow items-center justify-center">
		<Button onclick={login}>Login with Google</Button>
	</div>
</section>
