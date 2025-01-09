<script lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';
import CateringEstablishments from '@/views/CateringEstablishments.vue';

import { handlePageReload } from './utils/ghPagesReloadHandler';
import { useCateringEstablishmentsProvider } from './providers/cateringEstablishmentsProvider';
import { useNavProvider } from '@/providers/navProvider';
import { useCategoryProvider } from '@/providers/categoryProvider';
import { useTypeProvider } from '@/providers/typeProvider';
import { onMounted } from 'vue';

export default {
	components: {
		MainTemplate,
		CateringEstablishments,
	},

	setup() {
		handlePageReload();

		useNavProvider();
		useCateringEstablishmentsProvider();
		useCategoryProvider();
		useTypeProvider();

		onMounted(() => {
			console.log('działa');
		});
	},
};
</script>

<template>
	<MainTemplate>
		<RouterView />
	</MainTemplate>
</template>
