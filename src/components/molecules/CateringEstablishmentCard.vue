<script lang="ts">
import StyledPlaceName from '@/components/atoms/StyledPlaceName.vue';
import IconButton from '@/components/atoms/IconButton.vue';

export default {
	components: {
		StyledPlaceName,
		IconButton,
	},

	props: {
		cateringEstablishment: {
			type: Object,
			required: true,
		},
	},

	setup() {
		const currentDay = new Date().getDay();

		return {
			currentDay,
		};
	},
};
</script>

<template>
	<div class="catering-establishment-card-wrapper">
		<StyledPlaceName class="title">{{ cateringEstablishment.name }}</StyledPlaceName>
		<img :src="`/src/${cateringEstablishment.imgUrl}`" :alt="cateringEstablishment.imgAlt" class="picture" />
		<div class="info-wrapper">
			<div class="info-row">
				<p class="info">{{ cateringEstablishment.distance }} km</p>
				<p class="info-description">{{ cateringEstablishment.adress }}</p>
			</div>
			<div class="info-row">
				<p class="info">{{ cateringEstablishment.type }}</p>
				<p class="info-description">Type</p>
			</div>
			<div class="info-row">
				<p class="info">{{ cateringEstablishment.ratings }} / 5</p>
				<p class="info-description">Ratings</p>
			</div>
			<div class="info-row">
				<p class="info">{{ cateringEstablishment.prices }}</p>
				<p class="info-description">Prices</p>
			</div>
			<div class="info-row">
				<p class="info">
					{{ cateringEstablishment.openHours[currentDay].openingAt }} - {{ cateringEstablishment.openHours[currentDay].closingAt }}
				</p>
				<p class="info-description">Today</p>
			</div>
		</div>
		<div class="icons-wrapper">
			<IconButton iconUrl="/src/assets/icons/info.svg" label="Show more details" />
			<IconButton
				iconUrl="/src/assets/icons/check.svg"
				activeIconUrl="/src/assets/icons/check-fill.svg"
				label="Mark as visited"
				:isActive="cateringEstablishment.isVisited" />
			<IconButton
				iconUrl="/src/assets/icons/heart.svg"
				activeIconUrl="/src/assets/icons/heart-fill.svg"
				label="Add to favourites"
				:isActive="cateringEstablishment.isFavourite" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.catering-establishment-card-wrapper {
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	padding: 0.8rem;
	border: 1px solid $black25;
	box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.14);
}

.picture {
	max-width: 100%;
}

.info-row {
	display: flex;
	align-items: center;
	gap: 2.4rem;
}

.info::first-letter {
	text-transform: uppercase;
}

.info-description {
	color: #636363;
	font-size: 1.2rem;
}

.icons-wrapper {
	display: flex;
	gap: 1.6rem;
}

@media (min-width: 400px) {
	.catering-establishment-card-wrapper {
		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-template-columns: 1fr auto;
	}

	.title {
		grid-row: 1 / 2;
		grid-column: 1 / 3;
	}

	.picture {
		grid-row: 2 / 3;
		grid-column: 1 / 3;
	}

	.info-row {
		grid-row: 3 / 4;
		grid-column: 1 / 2;
	}

	.icons-wrapper {
		grid-row: 3 / 4;
		grid-column: 2 / 3;
		flex-direction: column;
		gap: 0.8rem;
	}
}

@media (min-width: 640px) {
	.catering-establishment-card-wrapper {
		grid-template-rows: auto 1fr;
		grid-template-columns: auto 1fr auto;
	}

	.title {
		grid-row: 1 / 2;
		grid-column: 2 / 4;
		text-align: left;
	}

	.picture {
		grid-row: 1 / 3;
		grid-column: 1 / 2;
		max-width: 260px;
	}

	.info-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.info-row {
		grid-row: 2 / 3;
		grid-column: 2 / 3;
	}

	.icons-wrapper {
		grid-row: 2 / 3;
		grid-column: 3 / 4;
		justify-content: flex-end;
		gap: 1.2rem;
	}
}

@media (min-width: 680px) {
	.catering-establishment-card-wrapper {
		grid-column-gap: 1.6rem;
		padding: 1.6rem;
	}
}
</style>
