<script setup lang="ts">
import SortSelect from '@/components/atoms/SortSelect.vue';
import SearchInput from '@/components/atoms/SearchInput.vue';
import CateringEstablishmentsCards from '@/components/organisms/CateringEstablishmentsCards.vue';
</script>

<template>
	<div class="catering-establishments-wrapper">
		<div class="controls-wrapper">
			<SortSelect />
			<SearchInput />
		</div>
		<CateringEstablishmentsCards />
	</div>
</template>

<style lang="scss" scoped>
.catering-establishments-wrapper {
	margin-top: 1.6rem;
	padding: 0.8rem;
}

.controls-wrapper {
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
}

@media (min-width: 460px) {
	.controls-wrapper {
		flex-direction: row-reverse;
		justify-content: space-between;
	}
}

@media (min-width: 500px) {
	.controls-wrapper {
		gap: 1.6rem;
	}
}

@media (min-width: 680px) {
	.catering-establishments-wrapper {
		padding: 1.6rem;
	}

	.controls-wrapper {
		gap: 3.2rem;
	}
}
</style>
