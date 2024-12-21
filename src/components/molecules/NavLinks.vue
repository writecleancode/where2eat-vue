<script lang="ts">
import NavButtonsWrapper from '@/components/atoms/NavButtonsWrapper.vue';
import StyledNavLink from '@/components/atoms/StyledNavLink.vue';
import HorizontalLine from '@/components/atoms/HorizontalLine.vue';

import { navCategories } from '@/data/navCategories';
import { useNavContext } from '@/providers/navProvider';
import { useCategoryContext } from '@/providers/categoryProvider';
import { useTypeContext } from '@/providers/typeProvider';

export default {
	components: {
		NavButtonsWrapper,
		StyledNavLink,
		HorizontalLine,
	},

	setup() {
		const { closeMobileNav } = useNavContext();
		const { currentCategory } = useCategoryContext();
		const { currentType, setType } = useTypeContext();

		const handleOngoingPromotionsClick = () => {
			closeMobileNav();
			setType('');
		};

		return {
			navCategories,
			currentCategory,
			currentType,
			closeMobileNav,
			handleOngoingPromotionsClick,
		};
	},
};
</script>

<template>
	<NavButtonsWrapper>
		<StyledNavLink
			v-for="navCategory in navCategories"
			:to="`/${navCategory.path}/${currentType}`"
			:isActive="currentCategory === navCategory.path"
			v-on:click="closeMobileNav"
			:key="navCategory.value">
			{{ navCategory.title }}
		</StyledNavLink>
		<HorizontalLine />
		<StyledNavLink to="/ongoing-promotions" :isActive="currentCategory === 'ongoing-promotions'" v-on:click="handleOngoingPromotionsClick">
			Ongoing Promotions
		</StyledNavLink>
	</NavButtonsWrapper>
</template>
