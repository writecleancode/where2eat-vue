import { sortOptions } from '@/data/sortOptions';
import { ref } from 'vue';
import { useLoading } from '@/hooks/useLoading';
import { usePlaces } from '@/hooks/usePlaces';
import { useSort } from '@/hooks/useSort';

export const useCateringEstablishments = () => {
	const initialSearchState = false;

	const cateringEstablishments = ref([]);
	const selectValue = ref(sortOptions[0].value);
	const isSearchActive = ref(initialSearchState);
	const { isLoading, setLoadingCompleted } = useLoading();
	const { getCateringEstablishments } = usePlaces();
	const { handleSortPlaces } = useSort();

	const setCateringEstablishments = cateringEstablishmentsToSet => {
		cateringEstablishments.value = cateringEstablishmentsToSet;
	};

	const setSelectValue = selectValueToSet => {
		selectValue.value = selectValueToSet;
	};

	const setSortedCateringEstablishments = placesToSort => {
		cateringEstablishments.value = handleSortPlaces(placesToSort, selectValue);
	};

	const getSortedCateringEstablishments = async (category: string | undefined, type: string | undefined) => {
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
		if (searchPhrase !== '' && isSearchActive === true) return;

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
