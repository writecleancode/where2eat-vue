<script lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';
import CateringEstablishments from '@/views/CateringEstablishments.vue';

import { useCateringEstablishmentsProvider } from './providers/cateringEstablishmentsProvider';
import { provide } from 'vue';
import { useNav, useNavProvider } from '@/providers/navProvider';
import { useCategory } from '@/composables/useCategory';
import { useType } from '@/composables/useType';

export default {
	components: {
		MainTemplate,
		CateringEstablishments,
	},

	setup() {
		useNavProvider();
		useCateringEstablishmentsProvider();
		const { currentCategory, setCategory } = useCategory();
		const { currentType, setType } = useType();
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
