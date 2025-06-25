import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import defaultPreset from 'cssnano-preset-default';
import cssnanoPlugin from 'cssnano';

const preset = defaultPreset({ normalizeWhitespace: false });

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	css: {
		postcss: {
			plugins: [autoprefixer(), cssnanoPlugin({ preset })]
		}
	}
});
