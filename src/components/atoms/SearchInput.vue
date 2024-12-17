<script lang="ts">
import SearchIcon from '@/assets/icons/SearchIcon.vue';

import { ref, watch } from 'vue';
import { useCategoryContext } from '@/providers/categoryProvider';
import { useCateringEstablishmentsContext } from '@/providers/cateringEstablishmentsProvider';
import { useTypeContext } from '@/providers/typeProvider';
import { usePlaces } from '@/hooks/usePlaces';
import debounce from 'lodash.debounce';

export default {
	components: {
		SearchIcon,
	},

	setup() {
		const inputValue = ref('');
		const { currentCategory } = useCategoryContext();
		const { currentType } = useTypeContext();
		const { setSortedCateringEstablishments, handleSearchState } = useCateringEstablishmentsContext();
		const { findPlaces } = usePlaces();

		const getMatchingPlaces = debounce(async (searchPhrase: string) => {
			const matchingPlaces = await findPlaces(currentCategory.value, currentType.value, searchPhrase.trim());
			setSortedCateringEstablishments(matchingPlaces);

			handleSearchState(searchPhrase);
		}, 500);

		const handleSearchInput = async (e: Event) => {
			const target = e.target as HTMLInputElement;
			inputValue.value = target.value;

			if (!currentCategory || !currentType) return;
			getMatchingPlaces(target.value);
		};

		watch([currentCategory, currentType], () => {
			inputValue.value = '';
		});

		return {
			inputValue,
			handleSearchInput,
		};
	},
};
</script>

<template>
	<div class="search-input-wrapper">
		<input type="text" id="search" aria-label="search" class="styled-input" :value="inputValue" v-on:input="handleSearchInput" />
		<label for="search" class="styled-label">
			<SearchIcon class="styled-icon" />
		</label>
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.search-input-wrapper {
	display: flex;
	border: 1px solid $black25;
	width: 100%;
	background-color: #f6f6f6;
}

.styled-input {
	flex-grow: 1;
	padding: 0.4rem 0.8rem;
	border: none;
	background-color: transparent;
	font-size: 1.4rem;
}

.styled-label {
	display: flex;
	border-left: 1px solid $black25;
	width: 32px;
	width: max-content;
}

.styled-icon {
	margin: 0.4rem;
}

@media (min-width: 460px) {
	.search-input-wrapper {
		max-width: 240px;
		min-width: min-content;
	}
}
</style>
