<script lang="ts">
import NavButtonsWrapper from '@/components/atoms/NavButtonsWrapper.vue';
import StyledNavLink from '@/components/atoms/StyledNavLink.vue';
import HorizontalLine from '@/components/atoms/HorizontalLine.vue';

import { useNavContext } from '@/providers/navProvider';
import { useCategoryContext } from '@/providers/categoryProvider';
import { cateringEstabilishmentsTypes } from '@/data/cateringEstabilishmentsTypes';
import { navCategories } from '@/data/navCategories';
import { inject } from 'vue';

export default {
	components: {
		NavButtonsWrapper,
		StyledNavLink,
		HorizontalLine,
	},

	props: {
		isDesktop: {
			type: Boolean,
		},
	},

	setup() {
		const { closeMobileNav } = useNavContext();
		const { currentCategory } = useCategoryContext();
		const currentType = inject('currentType');
		const basePath = import.meta.env.VITE_BASE_PATH;

		const createPath = (basePath, category, type) => {
			category = category || navCategories[0];

			return `${basePath}/${category}/${type}`;
		};

		return {
			cateringEstabilishmentsTypes,
			closeMobileNav,
			currentCategory,
			currentType,
			basePath,
			createPath,
		};
	},
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
			v-on:click="closeMobileNav">
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
