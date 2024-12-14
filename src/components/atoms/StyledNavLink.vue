<script lang="ts">
export default {
	props: {
		to: {
			type: String,
			required: true,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		isReversed: {
			type: Boolean,
			default: false,
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<template>
	<RouterLink :to class="styled-nav-link" :class="{ 'active': isActive, reversed: isReversed, disabled: isDisabled }">
		<slot />
	</RouterLink>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.styled-nav-link {
	position: relative;
	display: inline-block;
	padding: 0.4rem 1.6rem;
	border: none;
	width: 100%;
	background-color: transparent;
	color: inherit;
	font-size: 1.8rem;
	font-weight: normal;
	text-transform: uppercase;
	transition: color 0.3s, font-weight 0.3s;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image: linear-gradient(90deg, #d9d9d9 0%, #e5e5e500 85%);
		opacity: 0.6;
		transition: opacity 0.2s;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 3px;
		background-color: $black;
		translate: -100%;
		transition: background-color 0.2s;
	}

	&:hover {
		&::before {
			opacity: 1;
		}

		&::after {
			background-color: $primary;
		}
	}

	&.router-link-active {
		color: $primary-light;
		font-weight: bold;

		&::before {
			opacity: 1;
		}

		&::after {
			background-color: $primary;
		}
	}

	&.reversed {
		text-align: right;

		&::before {
			background-image: linear-gradient(-90deg, #d9d9d9 0%, #e5e5e500 85%);
		}

		&::after {
			right: 0;
			left: initial;
			translate: 100%;
		}
	}

	&.disabled {
		opacity: 0.5;
		pointer-events: none;
	}
}

@media (min-width: 1400px) {
	.styled-nav-link {
		text-align: right;

		&::before {
			background-image: linear-gradient(-90deg, #d9d9d9 0%, #e5e5e500 85%);
		}

		&::after {
			left: initial;
			right: initial;
			right: 0;
			translate: 100%;
		}

		&.reversed {
			text-align: left;

			&::before {
				background-image: linear-gradient(90deg, #d9d9d9 0%, #e5e5e500 85%);
			}

			&::after {
				left: 0;
				translate: -100%;
			}
		}
	}
}
</style>
