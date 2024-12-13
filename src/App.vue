<script lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';
import CateringEstablishments from '@/views/CateringEstablishments.vue';
import { useNav } from './composables/useNav';
import { provide } from 'vue';

export default {
	components: {
		MainTemplate,
		CateringEstablishments,
	},

	setup() {
		const { isNavActive, handleMobileNav, closeMobileNav } = useNav();
		provide('isNavActive', isNavActive);
		provide('handleMobileNav', handleMobileNav);
		provide('closeMobileNav', closeMobileNav);
	},
};
</script>

<template>
	<MainTemplate>
		<CateringEstablishments />
	</MainTemplate>
</template>

<style scoped></style>
