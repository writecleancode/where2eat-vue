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
import { inject, onMounted, ref, watch } from 'vue';
import { useModal } from '@/hooks/useModal';
import { useError } from '@/hooks/useError';
import { useRoute, useRouter } from 'vue-router';
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
		const { setCategory } = useCategoryContext();

		// const currentPlace = ref(cateringEstablishments[0]);
		const route = useRoute();
		const router = useRouter();
		const basePath = import.meta.env.VITE_BASE_PATH;
		const { isModalOpen, openModal, closeModal } = useModal();
		const { errorMessage, displayErrorMessage, clearErrorMessage } = useError();
		const setType = inject('setType');
		const currentPlace = ref({});

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
			const matchingPlace = cateringEstablishments.value.find(place => place.id === placeId);
			if (matchingPlace) currentPlace.value = matchingPlace;
			openModal();
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
			:openOpenModal="handleDisplayPlaceDetails"
			:key="cateringEstablishment.id" />
		<NoResultsText v-else>{{ errorMessage }}</NoResultsText>
		<Modal :isModalOpen v-if="cateringEstablishments.length">
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
