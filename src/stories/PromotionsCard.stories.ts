import type { Meta, StoryObj } from '@storybook/vue3';
import PromotionsCard from '@/components/molecules/PromotionsCard.vue';

const meta: Meta<typeof PromotionsCard> = {
	title: 'Components/Molecules/PromotionsCard',
	component: PromotionsCard,
	parameters: {
		layout: 'centered',
	},
	args: {
		promotionItem: {
			placeName: 'Da Grasso',
			image: {
				url: 'assets/img/da_grasso.jpg',
				alt: 'pizza',
			},
			promotionsList: ['Pepsi 0.5l to every takeaway order', '2 x pizza 42cm for 20$', 'on wednesdays: large pizza at price of medium'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof PromotionsCard>;

export const Default: Story = {};

export const limitedWidth: Story = {
	render: args => ({
		components: { PromotionsCard },
		setup() {
			return { args };
		},
		template: `<div style="maxWidth: 360px"><PromotionsCard v-bind="args" /></div>`,
	}),
};
