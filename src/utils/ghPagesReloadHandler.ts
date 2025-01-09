import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

export const handlePageReload = () => {
	const router = useRouter();

	onMounted(() => {
		let path = localStorage.getItem('path');
		if (path) {
			localStorage.removeItem('path');
			// router.push(path);
			router.push('/where2eat-vue/ongoing-promotions');
		}
	});
};

// fix created thanks to this tutorial:
// https://medium.com/swlh/how-to-host-your-angular-reactjs-vuejs-spa-on-github-pages-2d9ab102ac7b
