import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';

const config = {
	preprocess: vitePreprocess({
		script: true
	}),
	compilerOptions: { runes: true },
	kit: { adapter: adapter() }
};

export default config;
