import { createRouter, createWebHistory } from 'vue-router';
import { basePath } from '@/utils/base-path';

import CateringEstablishments from '@/views/CateringEstablishments.vue';
import OngoingPromotions from '@/views/OngoingPromotions.vue';

const routes = [
	{ path: `${basePath}/:category?/:type?`, component: CateringEstablishments },
	{ path: `${basePath}/ongoing-promotions`, component: OngoingPromotions },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
