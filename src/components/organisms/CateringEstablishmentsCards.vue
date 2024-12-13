<script lang="ts">
import CateringEstablishmentCard from '@/components/molecules/CateringEstablishmentCard.vue';

import { cateringEstablishments } from '@/data/cateringEstablishments';

export default {
	components: {
		CateringEstablishmentCard,
	},

	setup() {
		return {
			cateringEstablishments,
		};
	},
};
</script>

<template>
	<div class="catering-establishments-cards-wrapper">
		<CateringEstablishmentCard
			v-for="cateringEstablishment in cateringEstablishments"
			:cateringEstablishment
			:key="cateringEstablishment.id" />
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
