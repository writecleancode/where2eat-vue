import { ref } from 'vue';

export const useError = () => {
	const errorMessage = ref('');

	const clearErrorMessage = () => (errorMessage.value = '');

	const displayErrorMessage = (category?: string, type?: string, isSearchActive?: boolean) => {
		if (isSearchActive) {
			errorMessage.value = 'No matching catering establishments found in your area';
			return;
		}

		const categoryText = (!category || category === 'all' ? '' : category).replace('-', ' ');
		const typeText = (!type || type === 'any' ? '' : `of type ${type}`).replace('-', ' ');

		errorMessage.value = `No ${categoryText} catering establishments ${typeText} found in your area`;
	};

	return {
		errorMessage,
		displayErrorMessage,
		clearErrorMessage,
	};
};
