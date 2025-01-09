<script setup lang="ts">
const props = defineProps({
	label: {
		type: String,
	},
	iconUrl: {
		type: String,
	},
	activeIconUrl: {
		type: String,
	},
	isActive: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<button class="icon-button" :aria-label="label" :title="label">
		<img :src="iconUrl" alt="" class="icon" />
		<img v-if="activeIconUrl" :src="activeIconUrl" alt="" class="icon active-icon" :class="{ active: isActive }" />
	</button>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.icon-button {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.4rem;
	border: 1px solid $black90;
	border-radius: 8px;
	background-color: transparent;
	overflow: hidden;
	transition: border-radius 0.5s;

	&:hover,
	&:focus-visible {
		border-radius: 20px;
	}
}

.icon {
	transition: clip-path 0.25s;
	pointer-events: none;
}

.active-icon {
	position: absolute;
	inset: 0;
	padding: inherit;
	background-color: #fff;
	clip-path: polygon(18% 82%, 82% 82%, 82% 82%, 18% 82%);

	&.active {
		clip-path: polygon(18% 18%, 82% 18%, 82% 82%, 18% 82%);
	}
}
</style>
