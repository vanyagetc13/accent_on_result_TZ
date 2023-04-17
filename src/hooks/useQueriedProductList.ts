import { useMemo } from "react";
import { IProduct } from "../types";

const useQueriedProductList = (productList: IProduct[], query: string) => {
	const filteredProductList = useMemo(() => {
		if (!query) return productList;
		return productList.filter((product) =>
			product.title.toLowerCase().includes(query.toLowerCase())
		);
	}, [productList, query]);
	return filteredProductList;
};

export default useQueriedProductList;
