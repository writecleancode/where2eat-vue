<template>
	<span class="horizontal-line"></span>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variables' as *;

.horizontal-line {
	display: block;
	margin-top: 1.6rem;
	max-width: 70%;
	min-height: 1px;
	background-color: $black50;
}

@media (min-width: 1400px) {
	.horizontal-line {
		margin-top: 5.6rem;
		margin-bottom: 0.8rem;
		max-width: unset;
		background-color: $black25;
	}
}
</style>
