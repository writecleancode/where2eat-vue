import { fileURLToPath, URL } from 'node:url';

import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

const baseUrl = process.env.NODE_ENV === 'development' ? './' : '/where2eat-vue/';

const viteConfig = defineViteConfig({
	plugins: [vue(), vueDevTools()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	base: baseUrl,
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
			},
		},
	},
});

const vitestConfig = defineVitestConfig({
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: './vitest.setup.ts',
	},
});

export default mergeConfig(viteConfig, vitestConfig);
