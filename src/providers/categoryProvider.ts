import { createProvider } from '@/utils/createProvider';
import { ref } from 'vue';

const useCategory = () => {
	const currentCategory = ref('');

	const setCategory = (category = 'all') => (currentCategory.value = category);

	return {
		currentCategory,
		setCategory,
	};
};

export const [useCategoryProvider, useCategoryContext] = createProvider('useCategory', useCategory);
