<script lang="ts">
import { usePromotions } from '@/hooks/usePromotions';
import { useLoading } from '@/hooks/useLoading';
import { useCategory } from '@/composables/useCategory';
import { onMounted } from 'vue';

export default {
	setup() {
		const { promotions, getPromotionsData } = usePromotions();
		const { isLoading, setLoadingCompleted } = useLoading();
		const { setCategory } = useCategory();

		onMounted(() => {
			(async () => {
				// await getPromotionsData();
				// setLoadingCompleted();
			})();
			setCategory('ongoing-promotions');
		});
	},
};
</script>

<template>
	<div>Ongoing Promotions - coming soon...</div>
</template>

<style lang="scss" scoped></style>
