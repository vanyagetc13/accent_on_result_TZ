type Currency = "USD" | "RUB";

export interface IBrand {
	id: number;
	title: string;
	sort: string;
	code: string;
}

export interface IProduct {
	type: string;
	id: number;
	sku: string;
	title: string;
	regular_price: {
		currency: Currency | string;
		value: number;
	};
	image: string;
	brand: number;
}

export interface IBrandCheck {
	code: string;
	checked: boolean;
}

export interface ICart extends IProduct{
	count: number;
}