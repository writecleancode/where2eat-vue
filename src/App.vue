<script setup lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';

import { handlePageReload } from './utils/ghPagesReloadHandler';
import { useCateringEstablishmentsProvider } from './providers/cateringEstablishmentsProvider';
import { useNavProvider } from '@/providers/navProvider';
import { useCategoryProvider } from '@/providers/categoryProvider';
import { useTypeProvider } from '@/providers/typeProvider';

handlePageReload();

useNavProvider();
useCateringEstablishmentsProvider();
useCategoryProvider();
useTypeProvider();
</script>

<template>
	<MainTemplate>
		<RouterView />
	</MainTemplate>
</template>
