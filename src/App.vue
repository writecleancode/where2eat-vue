<script lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';
import CateringEstablishments from '@/views/CateringEstablishments.vue';

import { useCateringEstablishmentsProvider } from './providers/cateringEstablishmentsProvider';
import { useNavProvider } from '@/providers/navProvider';
import { useCategoryProvider } from '@/providers/categoryProvider';
import { provide } from 'vue';
import { useType } from '@/composables/useType';

export default {
	components: {
		MainTemplate,
		CateringEstablishments,
	},

	setup() {
		useNavProvider();
		useCateringEstablishmentsProvider();
		useCategoryProvider();
		const { currentType, setType } = useType();
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
