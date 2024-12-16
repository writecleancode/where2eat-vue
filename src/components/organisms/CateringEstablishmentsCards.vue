<script lang="ts">
import LoadingGif from '@/components/atoms/LoadingGif.vue';
import CateringEstablishmentCard from '@/components/molecules/CateringEstablishmentCard.vue';
import NoResultsText from '@/components/atoms/NoResultsText.vue';

import { navCategories } from '@/data/navCategories';
import { cateringEstabilishmentsTypes } from '@/data/cateringEstabilishmentsTypes';
import { inject, onMounted, ref, watch } from 'vue';
import { useCateringEstablishments } from '@/composables/useCateringEstablishments';
import { useModal } from '@/hooks/useModal';
import { useError } from '@/hooks/useError';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default {
	components: {
		LoadingGif,
		CateringEstablishmentCard,
		NoResultsText,
	},

	setup() {
		// const currentPlace = ref(cateringEstablishments[0]);
		const route = useRoute();
		const router = useRouter();
		const basePath = import.meta.env.VITE_BASE_PATH;
		const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
		const { errorMessage, displayErrorMessage, clearErrorMessage } = useError();
		const cateringEstablishments = inject('cateringEstablishments');
		const getSortedCateringEstablishments = inject('getSortedCateringEstablishments');
		const isLoading = inject('isLoading');
		const toggleVisitedStatus = inject('toggleVisitedStatus');
		const toggleFavouriteStaus = inject('toggleFavouriteStaus');
		const isSearchActive = inject('isSearchActive');
		const setCategory = inject('setCategory');
		const setType = inject('setType');
		const currentPlace = ref(cateringEstablishments[0]);

		const handleVisitedStatus = async (index: number, id: string) => {
			toggleVisitedStatus(index);

			try {
				await axios.post('/visited', { clickedId: id });
				if (route.params.category === 'unvisited') getSortedCateringEstablishments(route.params.category, route.params.type);
			} catch (error) {
				console.log(error);
			}
		};

		const handleFavouritesStatus = async (index: number, id: string) => {
			toggleFavouriteStaus(index);

			try {
				await axios.post('/favourites', { clickedId: id });
				if (route.params.category === 'favourites') getSortedCateringEstablishments(route.params.category, route.params.type);
			} catch (error) {
				console.log(error);
			}
		};

		const handleDisplayPlaceDetails = (placeId: string) => {
			const matchingPlace = cateringEstablishments.find(place => place.id === placeId);
			if (matchingPlace) currentPlace.value = matchingPlace;
			handleOpenModal();
		};

		const handleDisplayCateringEstablishments = () => {
			if (route.params.category && route.params.type) {
				getSortedCateringEstablishments(route.params.category, route.params.type);
			}

			route.params.category && setCategory(route.params.category);
			route.params.type && setType(route.params.type);
		};

		onMounted(() => {
			handleDisplayCateringEstablishments();
		});

		watch(route, () => {
			handleDisplayCateringEstablishments();
		});

		watch(cateringEstablishments, () => {
			cateringEstablishments.length === 0
				? displayErrorMessage(route.params.category, route.params.type, isSearchActive)
				: clearErrorMessage();
		});

		if (!route.params.category) {
			router.push(`${basePath}/${navCategories[0].path}/${cateringEstabilishmentsTypes[0].path}`);
		}
		if (route.params.category && route.params.category !== 'ongoing-promotions' && !route.params.type) {
			router.push(`${basePath}/${route.params.category}/${cateringEstabilishmentsTypes[0].path}`);
		}

		return {
			cateringEstablishments,
			isLoading,
			errorMessage,
		};
	},
};
</script>

<template>
	<div class="catering-establishments-cards-wrapper">
		<LoadingGif v-if="isLoading" />
		<CateringEstablishmentCard
			v-else-if="cateringEstablishments.length"
			v-for="cateringEstablishment in cateringEstablishments"
			:cateringEstablishment
			:key="cateringEstablishment.id" />
		<NoResultsText v-else>{{ errorMessage }}</NoResultsText>
	</div>
</template>

<style lang="scss" scoped>
.catering-establishments-cards-wrapper {
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	margin-top: 1.6rem;
}
</style>
