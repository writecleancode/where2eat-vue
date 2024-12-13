<template>
	<p class="styled-place-name">
		<slot />
	</p>
</template>

<style lang="scss" scoped>
.styled-place-name {
	padding: 0.4rem;
	background-color: #555555;
	color: #fff;
	font-weight: bold;
	text-align: center;
}

@media (min-width: 640px) {
	.styled-place-name {
		padding-left: 0.8rem;
		padding-right: 0.8rem;
	}
}

@media (min-width: 680px) {
	.styled-place-name {
		font-size: 1.8rem;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}
}
</style>
