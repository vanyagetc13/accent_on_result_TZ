import { useMemo } from "react";
import { IBrandCheck, IProduct } from "../types";

const filterProductList = (
	productList: IProduct[],
	brandFilter: IBrandCheck[]
) => {
	const filters: IBrandCheck[] = brandFilter.filter((brand) => brand.checked);
	if (filters.length === 0) return productList;
	let result: IProduct[] = [];
	for (let product of productList) {
		for (let brand of filters) {
			if (brand.checked && brand.code === `brand_${product.brand}`)
				result.push(product);
		}
	}
	return result;
};

const useFilteredProductList = (
	productList: IProduct[],
	brandFilter: IBrandCheck[]
) => {
	const getFilteredProductList = useMemo(() => {
		return filterProductList(productList, brandFilter);
	}, [productList, brandFilter]);
	return getFilteredProductList;
};

export default useFilteredProductList;
