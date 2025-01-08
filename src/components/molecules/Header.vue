<script lang="ts">
import BurgerButton from '@/components/atoms/BurgerButton.vue';
import MobileNav from '@/components/organisms/MobileNav.vue';

import { useNavContext } from '@/providers/navProvider';

export default {
	components: {
		BurgerButton,
		MobileNav,
	},

	setup() {
		const { isNavActive, handleMobileNav, closeMobileNav } = useNavContext();

		return {
			isNavActive,
			handleMobileNav,
			closeMobileNav,
		};
	},
};
</script>

<template>
	<header class="header-wrapper">
		<div class="title-wrapper">
			<a href="#" class="app-title" @click="closeMobileNav">
				<h1>Where2<span>Eat</span></h1>
			</a>
			<span class="decoration-line"></span>
			<p class="app-description">Find place to kill your hunger</p>
			<BurgerButton :isActive="isNavActive" @click="handleMobileNav" />
		</div>
	</header>
	<MobileNav />
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.header-wrapper {
	position: relative;
	z-index: 1;
}

.title-wrapper {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.4rem 0.8rem;
	background-color: #f2f2f2;
	text-align: center;
}

.app-title {
	margin-right: -1.4rem;
	padding: 0.3rem 0.8rem;
	translate: -0.8rem;

	h1 {
		font-size: 2.4rem;
		font-weight: bold;
	}

	span {
		color: $primary-light;
	}
}

.decoration-line {
	display: none;
	margin: 0.4rem 0;
	width: 1px;
	min-height: 100%;
	background-color: $black25;
}

.app-description {
	display: none;
}

@media (min-width: 400px) {
	.title-wrapper {
		padding-left: 1.2rem;
		padding-right: 1.2rem;
	}
}

@media (min-width: 600px) {
	.title-wrapper {
		justify-content: flex-start;
		gap: 1.6rem;
	}
}

@media (min-width: 680px) {
	.decoration-line {
		display: block;
		align-self: stretch;
	}

	.app-description {
		display: block;
		font-size: 1.6rem;
	}
}

@media (min-width: 1020px) {
	.header-wrapper {
		grid-column: 1 / 3;
	}
	.title-wrapper {
		justify-content: center;
	}
}

@media (min-width: 1400px) {
	.header-wrapper {
		grid-column: 1 / 4;
	}
}
</style>
