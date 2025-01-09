<script setup lang="ts">
import { onClickOutside, type MaybeElement, type OnClickOutsideHandler } from '@vueuse/core';
import { useTemplateRef } from 'vue';

const { closeModal } = defineProps({
	isModalOpen: {
		type: Boolean,
		default: false,
	},
	closeModal: {
		type: Function,
	},
});

const modal = useTemplateRef<MaybeElement>('my-modal');

onClickOutside(modal, closeModal as OnClickOutsideHandler);
</script>

<template>
	<teleport to="body">
		<div class="modal-overlay" :class="{ active: isModalOpen }">
			<div class="modal-wrapper" ref="my-modal">
				<slot />
			</div>
		</div>
	</teleport>
</template>

<style lang="scss" scoped>
.modal-overlay {
	display: none;
	position: fixed;
	inset: 0;
	z-index: 2;
	background-color: rgba(255, 255, 255, 0.75);

	&.active {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

.modal-wrapper {
	margin-top: 1.6rem;
	margin-bottom: 1.6rem;
	margin-left: auto;
	margin-right: auto;
	padding: 1.6rem;
	background-color: #fff;
	box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.14);
	width: fit-content;
}

@media (min-width: 560px) {
	.modal-overlay {
		&.active {
			display: block;
			justify-content: initial;
			align-items: initial;
		}
	}

	.modal-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		margin: 0;
		width: auto;
	}
}
</style>
