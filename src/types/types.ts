export type catetingEstablishmentsType = {
	id: string;
	type: string;
	typeName: string;
	name: string;
	imgUrl: string;
	imgAlt: string;
	adress: string;
	adressLong: string;
	distance: string;
	ratings: string;
	prices: string;
	phoneNumber: string;
	openHours: { openingAt: string; closingAt: string; dayOfWeek: string }[];
	isVisited: boolean;
	isFavourite: boolean;
};

export type DatoCmsPromotionsDataType = {
	placeName: string;
	image: {
		url: string;
		alt: string;
	};
	promotionsList: string;
};

export type promotionsDataType = {
	placeName: string;
	image: {
		url: string;
		alt: string;
	};
	promotionsList: string[];
};

export type sortOptionsType = {
	text: string;
	value: string;
};
