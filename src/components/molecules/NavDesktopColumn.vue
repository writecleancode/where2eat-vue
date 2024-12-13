<script lang="ts">
export default {
	props: {
		isLargeScreenOnly: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<template>
	<div class="nav-desktop-column" :class="{ 'large-screen-only': isLargeScreenOnly }">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.nav-desktop-column {
	display: none;
	padding: 4.8rem 2.4rem;
}

@media (min-width: 1020px) {
	.nav-desktop-column {
		display: block;
	}

	.large-screen-only {
		display: none;
	}
}

@media (min-width: 1400px) {
	.nav-desktop-column {
		display: block;
	}
}
</style>
