import { ref } from 'vue';

const initialLoadingState = true;

export const useLoading = () => {
	const isLoading = ref(initialLoadingState);

	const setLoadingCompleted = () => (isLoading.value = false);

	return {
		isLoading,
		setLoadingCompleted,
	};
};
