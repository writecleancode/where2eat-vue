<script setup lang="ts">
import NavButtonsWrapper from '@/components/atoms/NavButtonsWrapper.vue';
import StyledNavLink from '@/components/atoms/StyledNavLink.vue';
import HorizontalLine from '@/components/atoms/HorizontalLine.vue';

import { navCategories } from '@/data/navCategories';
import { useNavContext } from '@/providers/navProvider';
import { useCategoryContext } from '@/providers/categoryProvider';
import { useTypeContext } from '@/providers/typeProvider';

const { closeMobileNav } = useNavContext();
const { currentCategory } = useCategoryContext();
const { currentType, setType } = useTypeContext();
const basePath = import.meta.env.VITE_BASE_PATH;

const handleOngoingPromotionsClick = () => {
	closeMobileNav();
	setType('');
};
</script>

<template>
	<NavButtonsWrapper>
		<StyledNavLink
			v-for="navCategory in navCategories"
			:to="`${basePath}/${navCategory.path}/${currentType}`"
			:isActive="currentCategory === navCategory.path"
			@click="closeMobileNav"
			:key="navCategory.value">
			{{ navCategory.title }}
		</StyledNavLink>
		<HorizontalLine />
		<StyledNavLink
			:to="`${basePath}/ongoing-promotions`"
			:isActive="currentCategory === 'ongoing-promotions'"
			@click="handleOngoingPromotionsClick">
			Ongoing Promotions
		</StyledNavLink>
	</NavButtonsWrapper>
</template>
