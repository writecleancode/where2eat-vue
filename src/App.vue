<script lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';
import CateringEstablishments from '@/views/CateringEstablishments.vue';

import { provide } from 'vue';
import { useNav } from '@/composables/useNav';
import { useCategory } from '@/composables/useCategory';
import { useType } from '@/composables/useType';
import { useCateringEstablishments } from '@/composables/useCateringEstablishments';

export default {
	components: {
		MainTemplate,
		CateringEstablishments,
	},

	setup() {
		const { isNavActive, handleMobileNav, closeMobileNav } = useNav();
		const { currentCategory, setCategory } = useCategory();
		const { currentType, setType } = useType();
		const {
			cateringEstablishments,
			getSortedCateringEstablishments,
			isLoading,
			toggleVisitedStatus,
			toggleFavouriteStaus,
			isSearchActive,

			setSortedCateringEstablishments,
			handleSearchState,

			selectValue,
			setSelectValue,
			setCateringEstablishments,
		} = useCateringEstablishments();
		provide('isNavActive', isNavActive);
		provide('handleMobileNav', handleMobileNav);
		provide('closeMobileNav', closeMobileNav);
		provide('setSortedCateringEstablishments', setSortedCateringEstablishments);
		provide('handleSearchState', handleSearchState);
		provide('currentCategory', currentCategory);
		provide('setCategory', setCategory);
		provide('currentType', currentType);
		provide('setType', setType);
		provide('cateringEstablishments', cateringEstablishments);
		provide('getSortedCateringEstablishments', getSortedCateringEstablishments);
		provide('isLoading', isLoading);
		provide('toggleVisitedStatus', toggleVisitedStatus);
		provide('toggleFavouriteStaus', toggleFavouriteStaus);
		provide('isSearchActive', isSearchActive);
		provide('setSortedCateringEstablishments', setSortedCateringEstablishments);
		provide('handleSearchState', handleSearchState);
		provide('selectValue', selectValue);
		provide('setSelectValue', setSelectValue);
		provide('setCateringEstablishments', setCateringEstablishments);
	},
};
</script>

<template>
	<MainTemplate>
		<RouterView />
	</MainTemplate>
</template>

<style scoped></style>
