<script lang="ts">
import NavButtonsWrapper from '@/components/atoms/NavButtonsWrapper.vue';
import StyledNavLink from '@/components/atoms/StyledNavLink.vue';
import HorizontalLine from '@/components/atoms/HorizontalLine.vue';

import { navCategories } from '@/data/navCategories';
import { inject } from 'vue';

export default {
	components: {
		NavButtonsWrapper,
		StyledNavLink,
		HorizontalLine,
	},

	setup() {
		const closeMobileNav = inject('closeMobileNav');

		const handleOngoingPromotions = () => {
			closeMobileNav();
		};

		return {
			navCategories,
			handleOngoingPromotions,
		};
	},
};
</script>

<template>
	<NavButtonsWrapper>
		<StyledNavLink v-for="navCategory in navCategories" :key="navCategory.value">{{ navCategory.title }}</StyledNavLink>
		<HorizontalLine />
		<StyledNavLink v-on:click="handleOngoingPromotions">Ongoing Promotions</StyledNavLink>
	</NavButtonsWrapper>
</template>
