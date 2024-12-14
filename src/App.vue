<script lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';
import CateringEstablishments from '@/views/CateringEstablishments.vue';

import { navCategories } from './data/navCategories';
import { cateringEstabilishmentsTypes } from './data/cateringEstabilishmentsTypes';
import { useNav } from './composables/useNav';
import { useCategory } from './composables/useCategory';
import { provide, watch } from 'vue';
import { useType } from './composables/useType';
import { useRoute, useRouter } from 'vue-router';

export default {
	components: {
		MainTemplate,
		CateringEstablishments,
	},

	setup() {
		const { isNavActive, handleMobileNav, closeMobileNav } = useNav();
		const { currentCategory, setCategory } = useCategory();
		const { currentType, setType } = useType();
		provide('isNavActive', isNavActive);
		provide('handleMobileNav', handleMobileNav);
		provide('closeMobileNav', closeMobileNav);
		provide('currentCategory', currentCategory);
		provide('setCategory', setCategory);
		provide('currentType', currentType);
		provide('setType', setType);

		const route = useRoute();
		const router = useRouter();
		const basePath = import.meta.env.VITE_BASE_PATH;

		// watch(route, () => {
		// 	console.log(route.params);
		// });

		if (!route.params.category) {
			router.push(`${basePath}/${navCategories[0].path}/${cateringEstabilishmentsTypes[0].path}`);
		}
		if (route.params.category && route.params.category !== 'ongoing-promotions' && !route.params.type) {
			router.push(`${basePath}/${route.params.category}/${cateringEstabilishmentsTypes[0].path}`);
		}
	},
};
</script>

<template>
	<MainTemplate>
		<RouterView />
	</MainTemplate>
</template>

<style scoped></style>
