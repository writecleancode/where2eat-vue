import { createProvider } from '@/utils/createProvider';
import { ref } from 'vue';

const initialNavState = false;

const useNav = () => {
	const isNavActive = ref(initialNavState);

	const handleMobileNav = () => (isNavActive.value = !isNavActive.value);

	const closeMobileNav = () => (isNavActive.value = false);

	return {
		isNavActive,
		handleMobileNav,
		closeMobileNav,
	};
};

export const [useNavProvider, useNavContext] = createProvider('useNav', useNav);
