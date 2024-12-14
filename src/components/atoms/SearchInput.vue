<script lang="ts">
import SearchIcon from '@/assets/icons/SearchIcon.vue';

import { inject, ref, watch } from 'vue';
import { useCateringEstablishments } from '@/composables/useCateringEstablishments';
import { usePlaces } from '@/hooks/usePlaces';
import debounce from 'lodash.debounce';

export default {
	components: {
		SearchIcon,
	},

	setup() {
		const inputValue = ref('');
		const currentCategory = inject('currentCategory');
		const currentType = inject('currentType');
		const { setSortedCateringEstablishments, handleSearchState } = useCateringEstablishments();
		const { findPlaces } = usePlaces();

		const getMatchingPlaces = debounce(async (searchPhrase: string) => {
			const matchingPlaces = await findPlaces(currentCategory, currentType, searchPhrase);
			setSortedCateringEstablishments(matchingPlaces);

			handleSearchState(searchPhrase);
		}, 500);

		const handleSearchInput = async e => {
			inputValue.value = e.target.value;

			if (!currentCategory || !currentType) return;
			getMatchingPlaces(e.target.value);
		};

		watch([currentCategory, currentType], () => {
			inputValue.value = '';
		});
	},
};
</script>

<template>
	<div class="search-input-wrapper">
		<input type="text" id="search" aria-label="search" class="styled-input" />
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
