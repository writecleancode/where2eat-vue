<script lang="ts">
import LoadingGif from '@/components/atoms/LoadingGif.vue';
import PromotionsCard from '@/components/molecules/PromotionsCard.vue';
import NoResultsText from '@/components/atoms/NoResultsText.vue';

import { usePromotions } from '@/hooks/usePromotions';
import { useLoading } from '@/hooks/useLoading';
import { inject, onMounted } from 'vue';

export default {
	components: {
		LoadingGif,
		PromotionsCard,
		NoResultsText,
	},

	setup() {
		const { promotions, getPromotionsData } = usePromotions();
		const { isLoading, setLoadingCompleted } = useLoading();
		const setCategory = inject('setCategory');

		onMounted(() => {
			(async () => {
				await getPromotionsData();
				setLoadingCompleted();
			})();
			setCategory('ongoing-promotions');
		});

		return {
			isLoading,
			promotions,
		};
	},
};
</script>

<template>
	<div class="ongoing-promotions-wrapper">
		<LoadingGif v-if="isLoading" />
		<template v-else-if="promotions.length > 0">
			<PromotionsCard v-for="(promotion, index) in promotions" :promotionItem="promotion" :key="index" />
		</template>
		<NoResultsText v-else>There are no available promotions right now.</NoResultsText>
	</div>
</template>

<style lang="scss" scoped>
.ongoing-promotions-wrapper {
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	margin-top: 1.6rem;
	padding: 0.8rem;
}

@media (min-width: 680px) {
	.ongoing-promotions-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding: 1.6rem;
	}
}

@media (min-width: 1020px) {
	.ongoing-promotions-wrapper {
		margin-top: 2.4rem;
	}
}
</style>
