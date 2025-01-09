<script lang="ts">
import LoadingGif from '@/components/atoms/LoadingGif.vue';
import CateringEstablishmentCard from '@/components/molecules/CateringEstablishmentCard.vue';
import Modal from './Modal.vue';
import CateringEstablishmentDetails from '@/components/molecules/CateringEstablishmentDetails.vue';
import NoResultsText from '@/components/atoms/NoResultsText.vue';

import { navCategories } from '@/data/navCategories';
import { cateringEstabilishmentsTypes } from '@/data/cateringEstabilishmentsTypes';
import { useCateringEstablishmentsContext } from '@/providers/cateringEstablishmentsProvider';
import { useCategoryContext } from '@/providers/categoryProvider';
import { useTypeContext } from '@/providers/typeProvider';
import { useModal } from '@/composables/useModal';
import { useError } from '@/composables/useError';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { basePath } from '@/utils/base-path';
import axios from 'axios';

export default {
	components: {
		LoadingGif,
		CateringEstablishmentCard,
		Modal,
		CateringEstablishmentDetails,
		NoResultsText,
	},

	setup() {
		const {
			cateringEstablishments,
			getSortedCateringEstablishments,
			isLoading,
			toggleVisitedStatus,
			toggleFavouriteStaus,
			isSearchActive,
		} = useCateringEstablishmentsContext();
		const currentPlace = ref({});
		const router = useRouter();
		const route = useRoute();
		const { isModalOpen, handleOpenModal, closeModal } = useModal();
		const { errorMessage, displayErrorMessage, clearErrorMessage } = useError();
		const { setCategory } = useCategoryContext();
		const { setType } = useTypeContext();

		const handleVisitedStatus = async (index: number, id: string) => {
			toggleVisitedStatus(index);

			try {
				await axios.post('/visited', { clickedId: id });
				if (route.params.category === 'unvisited') getSortedCateringEstablishments(route.params.category, route.params.type as string);
			} catch (error) {
				console.log(error);
			}
		};

		const handleFavouritesStatus = async (index: number, id: string) => {
			toggleFavouriteStaus(index);

			try {
				await axios.post('/favourites', { clickedId: id });
				if (route.params.category === 'favourites') getSortedCateringEstablishments(route.params.category, route.params.type as string);
			} catch (error) {
				console.log(error);
			}
		};

		const handleDisplayPlaceDetails = (e: MouseEvent, placeId: string) => {
			const matchingPlace = cateringEstablishments.value.find(place => place.id === placeId);
			if (matchingPlace) currentPlace.value = matchingPlace;
			handleOpenModal(e);
		};

		const handleDisplayCateringEstablishments = () => {
			if (route.params.category && route.params.type) {
				getSortedCateringEstablishments(route.params.category as string, route.params.type as string);
			}

			route.params.category && setCategory(route.params.category as string);
			route.params.type && setType(route.params.type as string);
		};

		onMounted(() => {
			handleDisplayCateringEstablishments();
		});

		watch(route, () => {
			handleDisplayCateringEstablishments();
		});

		watch(cateringEstablishments, () => {
			cateringEstablishments.value.length === 0
				? displayErrorMessage(route.params.category as string, route.params.type as string, isSearchActive.value)
				: clearErrorMessage();
		});

		if (!route.params.category) {
			router.push(`${basePath}/${navCategories[0].path}/${cateringEstabilishmentsTypes[0].path}`);
		}
		if (route.params.category && route.params.category !== 'ongoing-promotions' && !route.params.type) {
			router.push(`${basePath}/${route.params.category}/${cateringEstabilishmentsTypes[0].path}`);
		}

		return {
			isLoading,
			cateringEstablishments,
			handleVisitedStatus,
			handleFavouritesStatus,
			handleDisplayPlaceDetails,
			errorMessage,
			currentPlace,
			isModalOpen,
			closeModal,
		};
	},
};
</script>

<template>
	<div class="catering-establishments-cards-wrapper">
		<LoadingGif v-if="isLoading" />
		<CateringEstablishmentCard
			v-else-if="cateringEstablishments.length"
			v-for="(cateringEstablishment, index) in cateringEstablishments"
			:cateringEstablishment
			:index
			:handleVisitedStatus
			:handleFavouritesStatus
			:handleOpenModal="handleDisplayPlaceDetails"
			:key="cateringEstablishment.id" />
		<NoResultsText v-else>{{ errorMessage }}</NoResultsText>
		<Modal v-if="cateringEstablishments.length" :isModalOpen :closeModal>
			<CateringEstablishmentDetails :cateringEstablishment="currentPlace" :closeModal />
		</Modal>
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
