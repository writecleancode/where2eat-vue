import { render } from '@testing-library/vue';
import { h, type Component } from 'vue';
import { useNavProvider } from '@/providers/navProvider';
import { useCateringEstablishmentsProvider } from '@/providers/cateringEstablishmentsProvider';
import { useCategoryProvider } from '@/providers/categoryProvider';
import { useTypeProvider } from '@/providers/typeProvider';

export const renderWithProviders = (component: Component, options = {}) => {
	return render(
		{
			setup() {
				useNavProvider();
				useCateringEstablishmentsProvider();
				useCategoryProvider();
				useTypeProvider();
				return () => h(component);
			},
		},
		options
	);
};
