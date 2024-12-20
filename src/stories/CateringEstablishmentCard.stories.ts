import type { Meta, StoryObj } from '@storybook/vue3';
import CateringEstablishmentCard from '@/components/molecules/CateringEstablishmentCard.vue';

const mockedPlace = {
	id: '11',
	type: 'pizzeria',
	typeName: 'pizzeria',
	name: 'O Sole Mio',
	imgUrl: 'assets/img/o_sole_mio.jpg',
	imgAlt: 'pizza',
	adress: 'Wolności 100, Kraków',
	adressLong: 'Wolności 100, 30-661 Kraków',
	distance: '4.3',
	ratings: '4.9',
	prices: '$$',
	phoneNumber: '17 583 20 30',
	openHours: [
		{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Sunday' },
		{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Monday' },
		{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Tuesday' },
		{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Wednesday' },
		{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Thursday' },
		{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Friday' },
		{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Saturday' },
	],
	isVisited: false,
	isFavourite: false,
};

const meta: Meta<typeof CateringEstablishmentCard> = {
	title: 'Components/Molecules/CateringEstablishmentCard',
	component: CateringEstablishmentCard,
	args: {
		cateringEstablishment: mockedPlace,
	},
};

export default meta;
type Story = StoryObj<typeof CateringEstablishmentCard>;

export const Default: Story = {
	render: args => ({
		components: { CateringEstablishmentCard },
		setup() {
			return { args };
		},
		template: `<CateringEstablishmentCard v-bind="args" />`,
	}),
	args: {
		cateringEstablishment: mockedPlace,
	},
};

export const Centered: Story = {
	parameters: {
		layout: 'centered',
	},
};

export const VisitedAndFavourite: Story = {
	parameters: {
		layout: 'centered',
	},
	args: {
		cateringEstablishment: {
			id: '11',
			type: 'pizzeria',
			typeName: 'pizzeria',
			name: 'O Sole Mio',
			imgUrl: 'assets/img/o_sole_mio.jpg',
			imgAlt: 'pizza',
			adress: 'Wolności 100, Kraków',
			adressLong: 'Wolności 100, 30-661 Kraków',
			distance: '4.3',
			ratings: '4.9',
			prices: '$$',
			phoneNumber: '17 583 20 30',
			openHours: [
				{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Sunday' },
				{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Monday' },
				{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Tuesday' },
				{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Wednesday' },
				{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Thursday' },
				{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Friday' },
				{ openingAt: '11:00', closingAt: '23:00', dayOfWeek: 'Saturday' },
			],
			isVisited: true,
			isFavourite: true,
		},
	},
};
