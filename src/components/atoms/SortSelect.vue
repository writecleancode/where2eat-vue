<script lang="ts">
import ArrowDown from '@/assets/icons/ArrowDown.vue';

import { sortOptions as sortOptionsData } from '@/data/sortOptions';

export default {
	components: {
		ArrowDown,
	},

	setup() {
		const sortOptions = sortOptionsData;

		return {
			sortOptions,
		};
	},
};
</script>

<template>
	<div class="sort-select-wrapper">
		<select title="sort" class="styled-select">
			<option v-for="option in sortOptions" :value="option.value" :key="option.value" class="styled-option">{{ option.text }}</option>
		</select>
		<ArrowDown class="select-arrow-down" />
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.sort-select-wrapper {
	position: relative;
	width: 100%;
}

.styled-select {
	display: inline-block;
	padding: 0.6rem 0.8rem;
	padding-right: calc(0.8rem + 2.4rem);
	border: 1px solid $black25;
	width: 100%;
	min-height: 100%;
	background-color: #f6f6f6;
	font-size: 1.4rem;
	appearance: none;
}

.styled-option {
	color: #282828;
}

.select-arrow-down {
	position: absolute;
	top: 2px;
	right: 0;
	margin: 0.4rem;
	pointer-events: none;
}

@media (min-width: 460px) {
	.sort-select-wrapper {
		max-width: 240px;
	}
}
</style>
