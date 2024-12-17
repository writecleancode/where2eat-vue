import { nextTick, ref, watch } from 'vue';

export const useModal = (initialState = false) => {
	const isModalOpen = ref(initialState);
	const appRootElement = document.getElementById('app');
	const openModalBtn = ref<HTMLButtonElement | null>(null);

	const openModal = () => (isModalOpen.value = true);

	const closeModal = () => (isModalOpen.value = false);

	const handleOpenModal = (e: MouseEvent) => {
		openModalBtn.value = e.target as HTMLButtonElement;
		openModal();
	};

	const handleEscapeKey = (e: KeyboardEvent) => e.key === 'Escape' && closeModal();

	const handleModalAccessibility = () => {
		if (isModalOpen.value) {
			document.addEventListener('keydown', handleEscapeKey);
			appRootElement?.setAttribute('inert', '');
			(async () => {
				await nextTick();
				document.getElementById('close-modal-btn')?.focus();
			})();
		} else {
			document.removeEventListener('keydown', handleEscapeKey);
			appRootElement?.removeAttribute('inert');
			openModalBtn.value?.focus();
			openModalBtn.value = null;
		}
	};

	watch(isModalOpen, () => {
		handleModalAccessibility();
	});

	return {
		isModalOpen,
		handleOpenModal,
		closeModal,
	};
};
