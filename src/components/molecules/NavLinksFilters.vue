<script setup lang="ts">
import NavButtonsWrapper from '@/components/atoms/NavButtonsWrapper.vue';
import StyledNavLink from '@/components/atoms/StyledNavLink.vue';
import HorizontalLine from '@/components/atoms/HorizontalLine.vue';

import { cateringEstabilishmentsTypes } from '@/data/cateringEstabilishmentsTypes';
import { navCategories } from '@/data/navCategories';
import { useNavContext } from '@/providers/navProvider';
import { useCategoryContext } from '@/providers/categoryProvider';
import { useTypeContext } from '@/providers/typeProvider';
import { basePath } from '@/utils/base-path';

const props = defineProps({
	isDesktop: {
		type: Boolean,
	},
});

const { closeMobileNav } = useNavContext();
const { currentCategory } = useCategoryContext();
const { currentType } = useTypeContext();

const createPath = (basePath: string, category: string, type: string) => {
	category = category || navCategories[0].path;

	return `${basePath}/${category}/${type}`;
};
</script>

<template>
	<NavButtonsWrapper :isDesktop>
		<StyledNavLink
			v-for="cateringEstabilishmentsType in cateringEstabilishmentsTypes"
			:to="createPath(basePath, currentCategory, cateringEstabilishmentsType.path)"
			:key="cateringEstabilishmentsType.value"
			:isActive="currentType === cateringEstabilishmentsType.path"
			:isReversed="true"
			:isDisabled="currentCategory === 'ongoing-promotions'"
			:tabindex="currentCategory === 'ongoing-promotions' ? '-1' : '0'"
			@click="closeMobileNav">
			{{ cateringEstabilishmentsType.title }}
		</StyledNavLink>
	</NavButtonsWrapper>
	<HorizontalLine class="separating-line" />
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.separating-line {
	margin-top: 2.4rem;
	margin-bottom: 0.8rem;
	max-width: none;
}

@media (min-width: 600px) {
	.separating-line {
		width: 1px;
		margin: 0;
		background-color: $black10;
	}
}

@media (min-width: 1020px) {
	.separating-line {
		margin-top: 2.4rem;
		margin-bottom: 0.8rem;
		width: auto;
		background-color: $black50;
		transform: scaleX(1.1);
	}
}

@media (min-width: 1400px) {
	.separating-line {
		display: none;
	}
}
</style>
