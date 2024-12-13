<template>
	<p class="no-results-text">
		<slot />
	</p>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.no-results-text {
	grid-column: 1 / 3;
	margin-top: 4rem;
	padding: 0 0.8rem;
	font-size: 1.8rem;
	color: $black90;
	text-align: center;
}
</style>
