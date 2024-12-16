<script lang="ts">
export default {};
</script>

<template>
	<div class="loading-gif-wrapper">
		<img src="/src/assets/img/loading_animation.gif" alt="loading animation" class="styled-img" />
	</div>
</template>

<style lang="scss" scoped>
.loading-gif-wrapper {
	grid-column: 1 / 3;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 50vh;
}

.styled-img {
	max-width: 80px;
}
</style>
