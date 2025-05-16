import { createRouter, createWebHistory } from 'vue-router';
import { basePath } from '@/utils/base-path';

import CateringEstablishments from '@/views/CateringEstablishments.vue';
import OngoingPromotions from '@/views/OngoingPromotions.vue';

const routes = [
	{ path: `${basePath}`, name: 'catering-establishments', component: CateringEstablishments },
	{ path: `${basePath}/:category?/:type?`, name: 'catering-establishments', component: CateringEstablishments, props: true },
	{ path: `${basePath}/ongoing-promotions`, name: 'ongoing-promotions', component: OngoingPromotions },
	{ path: `${basePath}/:pathPatch(.*)*`, redirect: `${basePath}` },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
