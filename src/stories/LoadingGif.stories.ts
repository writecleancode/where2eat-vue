import type { Meta, StoryObj } from '@storybook/vue3';
import LoadingGif from '@/components/atoms/LoadingGif.vue';

const meta: Meta<typeof LoadingGif> = {
	title: 'Components/Atoms/LoadingGif',
	component: LoadingGif,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof LoadingGif>;

export const Default: Story = {};
