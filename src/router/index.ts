import { createRouter, createWebHistory } from 'vue-router';

import CateringEstablishments from '@/views/CateringEstablishments.vue';
import OngoingPromotions from '@/views/OngoingPromotions.vue';

const routes = [
	{ path: '/:category?/:type?', component: CateringEstablishments },
	{ path: '/ongoing-promotions', component: OngoingPromotions },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
