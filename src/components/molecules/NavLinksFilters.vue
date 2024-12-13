<script lang="ts">
import NavButtonsWrapper from '@/components/atoms/NavButtonsWrapper.vue';
import StyledNavLink from '@/components/atoms/StyledNavLink.vue';
import HorizontalLine from '@/components/atoms/HorizontalLine.vue';

import { cateringEstabilishmentsTypes } from '@/data/cateringEstabilishmentsTypes';

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
		return {
			cateringEstabilishmentsTypes,
		};
	},
};
</script>

<template>
	<NavButtonsWrapper :isDesktop>
		<StyledNavLink
			v-for="cateringEstabilishmentsType in cateringEstabilishmentsTypes"
			:key="cateringEstabilishmentsType.value"
			:isReversed="true">
			{{ cateringEstabilishmentsType.title }}</StyledNavLink
		>
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
