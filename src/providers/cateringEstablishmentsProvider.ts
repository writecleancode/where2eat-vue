import type { catetingEstablishmentsType } from '@/types/types';

import { sortOptions } from '@/data/sortOptions';
import { ref } from 'vue';
import { useLoading } from '@/composables/useLoading';
import { usePlaces } from '@/hooks/usePlaces';
import { useSort } from '@/hooks/useSort';
import { createProvider } from '@/utils/createProvider';

const initialSearchState = false;

const useCateringEstablishments = () => {
	const cateringEstablishments = ref<catetingEstablishmentsType[]>([]);
	const selectValue = ref(sortOptions[0].value);
	const isSearchActive = ref(initialSearchState);
	const { isLoading, setLoadingCompleted } = useLoading();
	const { getCateringEstablishments } = usePlaces();
	const { handleSortPlaces } = useSort();

	const setCateringEstablishments = (cateringEstablishmentsToSet: catetingEstablishmentsType[]) => {
		cateringEstablishments.value = cateringEstablishmentsToSet;
	};

	const setSelectValue = (selectValueToSet: string) => {
		selectValue.value = selectValueToSet;
	};

	const setSortedCateringEstablishments = (placesToSort: catetingEstablishmentsType[]) => {
		cateringEstablishments.value = handleSortPlaces(placesToSort, selectValue.value);
	};

	const getSortedCateringEstablishments = async (category: string, type: string) => {
		const data = await getCateringEstablishments(category, type);
		setSortedCateringEstablishments(data);
		setLoadingCompleted();
	};

	const toggleVisitedStatus = (index: number) => {
		cateringEstablishments.value[index].isVisited = !cateringEstablishments.value[index].isVisited;
	};

	const toggleFavouriteStaus = (index: number) => {
		cateringEstablishments.value[index].isFavourite = !cateringEstablishments.value[index].isFavourite;
	};

	const handleSearchState = (searchPhrase: string) => {
		if (searchPhrase !== '' && isSearchActive.value === true) return;

		searchPhrase === '' ? (isSearchActive.value = false) : (isSearchActive.value = true);
	};

	return {
		cateringEstablishments,
		setCateringEstablishments,
		setSortedCateringEstablishments,
		isLoading,
		selectValue,
		setSelectValue,
		isSearchActive,
		handleSearchState,
		getSortedCateringEstablishments,
		toggleVisitedStatus,
		toggleFavouriteStaus,
	};
};

export const [useCateringEstablishmentsProvider, useCateringEstablishmentsContext] = createProvider(
	'useCateringEstablishments',
	useCateringEstablishments
);
