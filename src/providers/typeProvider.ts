import { createProvider } from '@/utils/createProvider';
import { ref } from 'vue';

export const useType = () => {
	const currentType = ref('');

	const setType = (type = 'any') => (currentType.value = type);

	return {
		currentType,
		setType,
	};
};

export const [useTypeProvider, useTypeContext] = createProvider('useType', useType);
