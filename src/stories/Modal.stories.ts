import type { Meta, StoryObj } from '@storybook/vue3';
import Modal from '@/components/organisms/Modal.vue';
import CateringEstablishmentDetails from '@/components/molecules/CateringEstablishmentDetails.vue';

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

const meta: Meta<typeof Modal> = {
	title: 'Components/Organisms/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	args: {
		isModalOpen: true,
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	render: args => ({
		components: { Modal, CateringEstablishmentDetails },
		setup() {
			return { args, mockedPlace };
		},
		template: `
		<Modal v-bind="args">
			<CateringEstablishmentDetails :cateringEstablishment="mockedPlace" />
		</Modal>
		`,
	}),
};
