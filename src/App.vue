<script lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';
import CateringEstablishments from '@/views/CateringEstablishments.vue';

import { useNav } from './composables/useNav';
import { useCategory } from './composables/useCategory';
import { provide } from 'vue';
import { useType } from './composables/useType';

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
	},
};
</script>

<template>
	<MainTemplate>
		<RouterView />
	</MainTemplate>
</template>

<style scoped></style>
