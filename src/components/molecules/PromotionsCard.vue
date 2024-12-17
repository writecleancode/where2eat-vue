<script lang="ts">
import StyledPlaceName from '../atoms/StyledPlaceName.vue';

export default {
	components: {
		StyledPlaceName,
	},

	props: {
		promotionItem: {
			type: Object,
			required: true,
		},
	},
};
</script>

<template>
	<div class="promotion-card-wrapper">
		<StyledPlaceName>{{ promotionItem.placeName }}</StyledPlaceName>
		<img :src="promotionItem.image.url" :alt="promotionItem.image.alt" class="styled-picture" />
		<ul class="styled-list">
			<li v-for="(promotion, index) in promotionItem.promotionsList" :key="index">
				<span class="custom-li-marker"></span>
				{{ promotion }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.promotion-card-wrapper {
	padding: 0.8rem;
	border: 1px solid $black25;
	box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.14);
}

.styled-picture {
	width: 100%;
	aspect-ratio: 4 / 1;
	object-fit: cover;
	object-position: center;
}

.styled-list {
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	margin-top: 0.8rem;
	list-style: none;
}

@media (min-wdith: 680px) {
	.styled-list {
		margin-top: 1.6rem;
	}
}

.custom-li-marker {
	position: relative;
	display: inline-block;
	margin-right: 0.8rem;
	width: 3px;
	height: 1em;

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		translate: 0 50%;
		border-radius: 50px;
		width: 3px;
		min-height: 3px;
		background-color: $black;
	}
}
</style>
