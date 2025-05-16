import type { DatoCmsPromotionsDataType, PromotionsDataType } from '@/types/types';
import { ref } from 'vue';
import axios from 'axios';

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
	const promotions = ref<PromotionsDataType[]>([]);

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

			const promotionsData: PromotionsDataType[] = data.allPromotions.map((item: DatoCmsPromotionsDataType) => ({
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
