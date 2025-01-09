<script setup lang="ts">
const props = defineProps({
	isDesktop: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<div class="nav-buttons-wrapper" :class="{ 'display-none': isDesktop }">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.nav-buttons-wrapper {
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
}

@media (min-width: 600px) {
	.nav-buttons-wrapper {
		padding: 1.6rem 0;
	}
}

@media (min-width: 1400px) {
	.nav-buttons-wrapper.display-none {
		display: none;
	}
}
</style>
