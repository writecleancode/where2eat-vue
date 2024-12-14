import { ref } from 'vue';

export const useModal = (initialState = false) => {
	const isModalOpen = ref(initialState);

	const openModal = () => (isModalOpen.value = true);

	const closeModal = () => (isModalOpen.value = false);

	return {
		isModalOpen,
		openModal,
		closeModal,
	};
};
