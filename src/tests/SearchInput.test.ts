import { setupServer } from 'msw/node';
import { handlers } from '@/mocks/handlers';
import { render, fireEvent, screen, waitFor } from '@/test-utils';
import { router } from '@/router';
import CateringEstablishments from '@/views/CateringEstablishments.vue';

const server = setupServer(...handlers);

describe('SearchInput', () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('Checks if only matching place is displayed', async () => {
		render(CateringEstablishments, {
			global: {
				plugins: [router],
			},
		});

		await router.isReady();

		const searchInput = screen.getByLabelText('search');
		const matchingPlace = await screen.findByText('Da Grasso');
		const mismatchedPlace = await screen.findByText("McDonald's");

		fireEvent.update(searchInput, 'grasso');
		waitFor(() => {
			expect(mismatchedPlace).not.toBeVisible();
		});
		expect(matchingPlace).toBeVisible();
	});

	it('Checks if message is displayed if there are no places matching search phrase', async () => {
		render(CateringEstablishments, {
			global: {
				plugins: [router],
			},
		});

		await router.isReady();

		const searchInput = screen.getByLabelText('search');
		const place = await screen.findByText('Da Grasso');

		fireEvent.update(searchInput, 'there is no such place');
		screen.findByText('No matching catering establishments found in your area');
		expect(place).toBeVisible();
	});
});
