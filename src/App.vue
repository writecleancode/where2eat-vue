<script lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';
import CateringEstablishments from '@/views/CateringEstablishments.vue';

import { useCateringEstablishmentsProvider } from './providers/cateringEstablishmentsProvider';
import { useNavProvider } from '@/providers/navProvider';
import { useCategoryProvider } from '@/providers/categoryProvider';
import { useTypeProvider } from '@/providers/typeProvider';

export default {
	components: {
		MainTemplate,
		CateringEstablishments,
	},

	setup() {
		useNavProvider();
		useCateringEstablishmentsProvider();
		useCategoryProvider();
		useTypeProvider();
	},
};
</script>

<template>
	<MainTemplate>
		<RouterView />
	</MainTemplate>
</template>

<style scoped></style>
