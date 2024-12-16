import { ref } from 'vue';

export const useCategory = () => {
	const currentCategory = ref('');

	const setCategory = (category = 'all') => (currentCategory.value = category);

	return {
		currentCategory,
		setCategory,
	};
};
