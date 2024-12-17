import { createProvider } from '@/utils/createProvider';
import { ref } from 'vue';

export const useNav = () => {
	const isNavActive = ref(false);

	const handleMobileNav = () => (isNavActive.value = !isNavActive.value);

	const closeMobileNav = () => (isNavActive.value = false);

	return {
		isNavActive,
		handleMobileNav,
		closeMobileNav,
	};
};

export const [useNavProvider, useNavContext] = createProvider('useNav', useNav);
