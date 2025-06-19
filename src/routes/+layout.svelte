<script>
	import { fb_initialise } from '$lib/firebase';
	let { children } = $props();
	import '../app.css';

	fb_initialise();
</script>

{@render children()}
