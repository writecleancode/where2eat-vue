<script lang="ts">
import NavLinksFilters from '@/components/molecules/NavLinksFilters.vue';
import NavLinks from '@/components/molecules/NavLinks.vue';

import { useNavContext } from '@/providers/navProvider';

export default {
	components: {
		NavLinksFilters,
		NavLinks,
	},

	setup() {
		const { isNavActive } = useNavContext();

		return {
			isNavActive,
		};
	},
};
</script>

<template>
	<div class="mobile-nav-wrapper" :class="{ active: isNavActive }">
		<NavLinksFilters />
		<div>
			<NavLinks />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.mobile-nav-wrapper {
	position: absolute;
	z-index: 999;
	padding: 1.6rem;
	border-bottom: 1px solid $black25;
	width: 100%;
	background-color: #f2f2f2;
	background-color: #fff;
	max-height: calc(100vh - 51px);
	box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.3);
	clip-path: polygon(0 0, 100% 0%, 100% 0%, 0 0%);
	overflow-y: scroll;
	pointer-events: none;
	transition: clip-path 0.4s;

	&.active {
		clip-path: polygon(0 0, 100% 0%, 100% 103%, 0% 103%);
		pointer-events: auto;
	}
}

@media (min-width: 600px) {
	.mobile-nav-wrapper {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr auto 1fr;
		gap: 2.4rem;
	}
}

@media (min-width: 1020px) {
	.mobile-nav-wrapper {
		display: none;
	}
}
</style>
