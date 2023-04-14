type Currency = "USD" | "RUB";

enum Brands {
	brand_1 = 1,
	brand_2,
	brand_3,
	brand_4,
	brand_5,
	brand_6,
	brand_7,
	brand_8,
	brand_9,
}

export interface IBrand {
	id: number;
	title: string;
	sort: string;
}

export interface IProduct {
	type: string;
	id: number;
	sku: string;
	title: string;
	regular_price: {
		currency: string;
		value: number;
	};
	image: string;
	brand: Brands;
}
