import axios from 'axios';
import { ref } from 'vue';

const query = `
{
	allPromotions {
		placeName
		image {
			url
			alt
		}
		promotionsList
	}
}
`;

export const usePromotions = () => {
	const promotions = ref([]);

	const getPromotionsData = async () => {
		try {
			const {
				data: { data },
			} = await axios.post(
				'https://graphql.datocms.com/',
				{
					query: query,
				},
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
					},
				}
			);

			const promotionsData = data.allPromotions.map(item => ({
				...item,
				promotionsList: JSON.parse(item.promotionsList),
			}));
			promotions.value = promotionsData;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		promotions,
		getPromotionsData,
	};
};
