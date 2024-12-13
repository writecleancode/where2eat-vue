<script lang="ts">
import Header from '@/components/molecules/Header.vue';
import NavDesktopColumn from '@/components/molecules/NavDesktopColumn.vue';
import NavLinksFilters from '@/components/molecules/NavLinksFilters.vue';
import NavLinks from '@/components/molecules/NavLinks.vue';

export default {
	components: {
		Header,
		NavDesktopColumn,
		NavLinksFilters,
		NavLinks,
	},
};
</script>

<template>
	<div>
		<Header />
		<div class="main-template-content-wrapper">
			<NavDesktopColumn>
				<NavLinksFilters :isDesktop="true" />
				<NavLinks />
			</NavDesktopColumn>
			<slot />
			<NavDesktopColumn :isLargeScreenOnly="true">
				<NavLinksFilters />
			</NavDesktopColumn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.main-template-content-wrapper {
	max-width: calc(1400px + 3.2rem);
	margin-left: auto;
	margin-right: auto;
}

@media (min-width: 1020px) {
	.main-template-content-wrapper {
		display: grid;
		grid-template-columns: auto 1fr;
	}
}

@media (min-width: 1400px) {
	.main-template-content-wrapper {
		grid-template-columns: 1fr 2fr 1fr;
	}
}
</style>
