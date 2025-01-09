<script setup lang="ts">
const props = defineProps({
	isActive: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<button class="burger-button" :class="{ active: isActive }" :aria-label="isActive ? 'close navigation' : 'open navigation'">
		<span class="burger-button__line burger-button__line--top"></span>
		<span class="burger-button__line burger-button__line--middle"></span>
		<span class="burger-button__line burger-button__line--bottom"></span>
	</button>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.burger-button {
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-left: auto;
	padding: 1.2rem;
	border: none;
	background-color: transparent;
	translate: 0.8rem;
	transition: opacity 0.3s;

	&:hover {
		opacity: 0.6;
	}

	&__line {
		display: block;
		border-radius: 100px;
		width: 32px;
		min-height: 3px;
		background-color: $black;
		transition: translate 0.3s, opacity 0.3s, rotate 0.3s;

		&--top,
		&--bottom {
			transform-origin: right;
		}
	}

	&.active {
		.burger-button__line {
			&--top {
				rotate: -45deg;
				translate: -5px -3px;
			}

			&--middle {
				translate: 100%;
				opacity: 0;
			}

			&--bottom {
				rotate: 45deg;
				translate: -5px 3px;
			}
		}
	}
}

@media (min-width: 1020px) {
	.burger-button {
		display: none;
	}
}
</style>
