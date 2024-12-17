<script lang="ts">
import StyledPlaceName from '@/components/atoms/StyledPlaceName.vue';
import Xmark from '@/assets/icons/Xmark.vue';
import type { PropType } from 'vue';

export default {
	components: {
		StyledPlaceName,
		Xmark,
	},

	props: {
		cateringEstablishment: {
			type: Object,
			required: true,
		},
		closeModal: {
			type: Function as PropType<() => void>,
		},
	},

	setup() {
		const basePath = import.meta.env.VITE_BASE_PATH;

		return {
			basePath,
		};
	},
};
</script>

<template>
	<div class="catering-establishments-details-wrapper">
		<StyledPlaceName>{{ cateringEstablishment.name }}</StyledPlaceName>
		<div class="list-and-img-wrapper">
			<img :src="`/src/${cateringEstablishment.imgUrl}`" :alt="cateringEstablishment.imgAlt" class="styled-picture" />
			<ul class="styled-list">
				<li v-for="openDetails in cateringEstablishment.openHours" :key="openDetails.DayOfWeek" class="styled-list-item">
					<p>{{ openDetails.openingAt }} - {{ openDetails.closingAt }}</p>
					<p class="day-of-week">{{ openDetails.dayOfWeek }}</p>
				</li>
			</ul>
		</div>
		<div class="contact-wrapper">
			<p>{{ cateringEstablishment.adressLong }}</p>
			<p>{{ cateringEstablishment.phoneNumber }}</p>
		</div>
		<button class="close-btn" v-on:click="closeModal" aria-label="close modal">
			<Xmark />
		</button>
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.catering-establishments-details-wrapper {
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
}

.list-and-img-wrapper {
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
}

.styled-picture {
	width: 100%;
	max-width: 286px;
}

.styled-list {
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 0 0.8rem;
}

.styled-list-item {
	display: flex;
	align-items: center;
	gap: 1.6rem;
	min-width: max-content;

	&:first-child {
		order: 1;
	}
}

.day-of-week {
	color: #636363;
	font-size: 1.2rem;
}

.contact-wrapper {
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	padding: 0 0.8rem;
}

.close-btn {
	padding: 0.2rem 0.8rem;
	border: none;
	border-radius: 8px;
	background-color: $primary;
	transition: opacity 0.3s;

	svg {
		width: 2.8rem;
		height: 2.8rem;
	}

	&:hover {
		opacity: 0.7;
	}
}

@media (min-width: 600px) {
	.catering-establishments-details-wrapper {
		gap: 1.6rem;
	}

	.list-and-img-wrapper {
		flex-direction: row;
		gap: 1.6rem;
	}

	.styled-picture {
		width: auto;
		max-width: 286px;
	}

	.styled-list {
		padding: 0;
		gap: 0.4rem;
	}

	.contact-wrapper {
		flex-direction: row;
		justify-content: space-between;
		gap: 2.4rem;
		padding: 0;
	}

	.close-btn {
		svg {
			width: 3.2rem;
			height: 3.2rem;
		}
	}
}
</style>
