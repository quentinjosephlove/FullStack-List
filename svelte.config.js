import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			server: {
				hmr: {
					clientPort: 3000,
					host: process.env.HMR_POST ? process.env.HMR_POST.substring("https://".lenght) : "localhost"
				}
			}
		}
	}
};

export default config;
