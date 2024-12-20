import { setupServer } from 'msw/node';
import { handlers } from '@/mocks/handlers';
import { render, fireEvent, screen, waitFor } from '@/test-utils';
import { router } from '@/router';
import { RouterView } from 'vue-router';
import CateringEstablishments from '@/views/CateringEstablishments.vue';
import NavLinksFilters from '@/components/molecules/NavLinksFilters.vue';
import NavLinks from '@/components/molecules/NavLinks.vue';

const server = setupServer(...handlers);

describe('CateringEstablishmentsCards', () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('Checks if loading animation is displayed', async () => {
		render(CateringEstablishments, {
			global: {
				plugins: [router],
			},
		});

		screen.getByAltText(/loading/);
	});

	it('Checks if choosing place type displays only matching places', async () => {
		render(
			{
				components: { RouterView, NavLinksFilters },
				template: `
	        <div>
	            <RouterView />
	            <NavLinksFilters />
	        </div>
	        `,
			},
			{
				global: {
					plugins: [router],
				},
			}
		);

		await router.isReady();

		const pizzeriaTypeButton = screen.getByText('pizzeria');
		const pizzeria = await screen.findByText('Da Grasso');
		const fastFood = screen.getByText("McDonald's");

		fireEvent.click(pizzeriaTypeButton);
		await waitFor(() => {
			expect(fastFood).not.toBeVisible();
		});
		expect(pizzeria).toBeVisible();

		// reset router params
		fireEvent.click(screen.getByText('any'));
		await screen.findByText("McDonald's");
	});

	it('Checks if choosing place category displays only matching places', async () => {
		render(
			{
				components: { RouterView, NavLinks },
				template: `
	        <div>
	            <RouterView />
	            <NavLinks />
	        </div>
	        `,
			},
			{
				global: {
					plugins: [router],
				},
			}
		);

		await router.isReady();

		const highlyRatedButton = screen.getByText('Highly rated');
		const highlyRatedPlace = await screen.findByText('Vino Rosso');
		const notHighlyRaptedPlace = screen.getByText('KFC');

		fireEvent.click(highlyRatedButton);
		await waitFor(() => {
			expect(notHighlyRaptedPlace).not.toBeVisible();
		});
		expect(highlyRatedPlace).toBeVisible();

		// reset router params
		fireEvent.click(screen.getByText('All'));
		await screen.findByText('KFC');
	});

	it('Checks if message of no results is displayed if there are no matching places', async () => {
		render(
			{
				components: { RouterView, NavLinksFilters, NavLinks },
				template: `
	            <div>
	            	<RouterView />
	            	<NavLinksFilters />
	            	<NavLinks />
	            </div>
	            `,
			},
			{
				global: {
					plugins: [router],
				},
			}
		);

		await router.isReady();

		const barTypeButton = screen.getByText('bar');
		const highlyRatedButton = screen.getByText('Highly rated');
		const notHighlyRatedPlace = await screen.findByText('Viva');
		const placeThatIsNotBar = screen.getByText("McDonald's");

		fireEvent.click(barTypeButton);
		await waitFor(() => {
			expect(placeThatIsNotBar).not.toBeVisible();
		});
		expect(notHighlyRatedPlace).toBeVisible();

		fireEvent.click(highlyRatedButton);
		await waitFor(() => {
			expect(notHighlyRatedPlace).not.toBeVisible();
		});

		await screen.findByText('No highly rated catering establishments of type bar found in your area');
	});
});
