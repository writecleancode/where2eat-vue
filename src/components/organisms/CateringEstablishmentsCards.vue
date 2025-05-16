<script setup lang="ts">
import LoadingGif from '@/components/atoms/LoadingGif.vue';
import CateringEstablishmentCard from '@/components/molecules/CateringEstablishmentCard.vue';
import Modal from './Modal.vue';
import CateringEstablishmentDetails from '@/components/molecules/CateringEstablishmentDetails.vue';
import NoResultsText from '@/components/atoms/NoResultsText.vue';

import type { CatetingEstablishmentsType } from '@/types/types';
import { navCategories } from '@/data/navCategories';
import { cateringEstabilishmentsTypes } from '@/data/cateringEstabilishmentsTypes';
import { useCateringEstablishmentsContext } from '@/providers/cateringEstablishmentsProvider';
import { useCategoryContext } from '@/providers/categoryProvider';
import { useTypeContext } from '@/providers/typeProvider';
import { useModal } from '@/composables/useModal';
import { useError } from '@/composables/useError';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const props = defineProps<{
	category: string,
	type: string,
}>()

const { cateringEstablishments, getSortedCateringEstablishments, isLoading, toggleVisitedStatus, toggleFavouriteStaus, isSearchActive } =
	useCateringEstablishmentsContext();
const currentPlace = ref<CatetingEstablishmentsType | null>(null);
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
		if (props.category === 'unvisited') getSortedCateringEstablishments(props.category, props.type);
	} catch (error) {
		console.log(error);
	}
};

const handleFavouritesStatus = async (index: number, id: string) => {
	toggleFavouriteStaus(index);

	try {
		await axios.post('/favourites', { clickedId: id });
		if (props.category === 'favourites') getSortedCateringEstablishments(props.category, props.type);
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
	if (props.category && props.type) {
		getSortedCateringEstablishments(props.category, props.type);
	}

	props.category && setCategory(props.category);
	props.type && setType(props.type);
};

onMounted(() => {
	handleDisplayCateringEstablishments();
});

watch(route, () => {
	handleDisplayCateringEstablishments();
});

watch(cateringEstablishments, () => {
	cateringEstablishments.value.length === 0
		? displayErrorMessage(props.category, props.type, isSearchActive.value)
		: clearErrorMessage();
});

if (!props.category) {
	router.push({ name: 'catering-establishments', params: { category: navCategories[0].path, type: cateringEstabilishmentsTypes[0].path }});
}
if (props.category && props.category !== 'ongoing-promotions' && !props.type) {
	router.push({ name: 'catering-establishments', params: { category: props.category, type: cateringEstabilishmentsTypes[0].path }});
}
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
