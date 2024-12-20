import { h, type Component } from 'vue';
import { useNavProvider } from './providers/navProvider';
import { useCateringEstablishmentsProvider } from './providers/cateringEstablishmentsProvider';
import { useCategoryProvider } from './providers/categoryProvider';
import { useTypeProvider } from './providers/typeProvider';
import { render } from '@testing-library/vue';

const createAppProviders = (component: Component) => ({
	setup() {
		useNavProvider();
		useCateringEstablishmentsProvider();
		useCategoryProvider();
		useTypeProvider();

		return () => h(component);
	},
});

const renderWithProviders = (component: Component, options = {}) => render(createAppProviders(component), options);

export * from '@testing-library/vue';
export { renderWithProviders as render };
