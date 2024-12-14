import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

const enableMocking = async () => {
	const { worker } = await import('./mocks/browser.ts');
	const workerUrl =
		import.meta.env.MODE === 'development'
			? '/mockServiceWorker.js'
			: 'https://writecleancode.github.io/where2eat-vue/mockServiceWorker.js';

	return worker.start({
		serviceWorker: {
			url: workerUrl,
		},
		onUnhandledRequest: 'bypass',
	});
};

enableMocking().then(() => {
	createApp(App).use(router).mount('#app');
});
