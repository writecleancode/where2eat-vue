import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

const baseUrl = process.env.NODE_ENV === 'development' ? './' : '/where2eat-vue/';

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueDevTools()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	base: baseUrl,
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: './vitest.setup.ts',
	},
});
