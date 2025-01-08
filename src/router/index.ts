import { createRouter, createWebHistory } from 'vue-router';
import { basePath } from '@/utils/base-path';

import CateringEstablishments from '@/views/CateringEstablishments.vue';
import OngoingPromotions from '@/views/OngoingPromotions.vue';

const routes = [
	{ path: `${basePath}`, component: CateringEstablishments },
	{ path: `${basePath}/:category?/:type?`, component: CateringEstablishments },
	{ path: `${basePath}/ongoing-promotions`, component: OngoingPromotions },
	// { path: `${basePath}/:pathPatch(.*)*`, redirect: `${basePath}` },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
