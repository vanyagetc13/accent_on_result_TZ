import { makeAutoObservable } from "mobx";
import { ICart, IProduct } from "../types";

class Cart {
	cart: ICart[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	get CartLength(): number {
		let count: number = 0;
		for (let item of this.cart) {
			count += item.count;
		}
		return count;
	}

	get totalPrice() {
		let count: number = 0;
		for (let item of this.cart) {
			count += item.count * item.regular_price.value;
		}
		const currency = this.cart[0]?.regular_price?.currency || "USD";
		return { count, currency };
	}

	getCountById(id: number) {
		const findItem = this.cart.find((e) => e.id === id);
		return findItem?.count || 0;
	}

	addProduct(item: IProduct) {
		const findItem = this.cart.find((e) => e.id === item.id);
		if (!findItem) this.cart.push({ ...item, count: 1 });
		else {
			findItem.count += 1;
		}
	}

	removeProduct(id: number) {
		const idx = this.cart.findIndex((e) => e.id === id);
		this.cart = this.cart
			.slice(0, idx)
			.concat(this.cart.slice(idx + 1, this.cart.length));
	}

	plusProduct(id: number) {
		const findItem = this.cart.find((e) => e.id === id);
		if (findItem) findItem.count += 1;
	}

	minusProduct(id: number) {
		const findItem = this.cart.find((e) => e.id === id);
		if (findItem) findItem.count -= 1;
	}
}

const cart = new Cart();
export default cart;
