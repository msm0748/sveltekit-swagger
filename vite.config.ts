import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['swagger-ui-dist/swagger-ui-bundle.js']
	},
	ssr: {
		noExternal: ['swagger-ui-dist']
	},
	resolve: {
		alias: {
			'swagger-ui-dist': 'swagger-ui-dist'
		}
	}
});
