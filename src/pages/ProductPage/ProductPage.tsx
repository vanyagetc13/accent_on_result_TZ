import React, { useEffect, useState } from "react";
import { IBrand, IBrandCheck, IProduct } from "../../types";
import brands from "../../assets/brands.json";
import products from "../../assets/products.json";
import {
	useFilteredProductList,
	useQueriedProductList,
} from "../../hooks/index";
import usePagination from "../../hooks/usePagination";
import ProductList from "../../components/ProductList/ProductList";
import PaginationBox from "../../components/PaginationBox/PaginationBox";

import styles from "./ProductPage.module.scss";
import BrandsFilter from "../../components/Filters/BrandsFilter/BrandsFilter";
import MyInput from "../../components/UI/MyInput/MyInput";

const ProductPage = () => {
	const productList: IProduct[] = products;
	const brandList: IBrand[] = brands;
	const [query, setQuery] = useState<string>("");
	const [brandChecks, setBrandChecks] = useState<IBrandCheck[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const queriedAndFilteredProductList = useFilteredProductList(
		useQueriedProductList(productList, query),
		brandChecks
	);

	const [usePaginate, pages] = usePagination(
		queriedAndFilteredProductList,
		6,
		currentPage,
		query,
		brandChecks
	);

	const handleCheckBoxChange = (code: string) => {
		const index = brandChecks.findIndex((e) => e.code === code);
		setBrandChecks((prev) => {
			let newArr = [...prev];
			newArr[index].checked = !newArr[index].checked;
			return newArr;
		});
	};
	useEffect(() => {
		const checks: IBrandCheck[] = [];
		brandList.forEach((brand) => {
			checks.push({
				code: brand.code,
				checked: false,
			});
		});
		setBrandChecks(checks);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className={styles.page}>
			<aside className={styles.aside}>
				<h3>Фильтры:</h3>
				<BrandsFilter
					checkBoxChange={handleCheckBoxChange}
					brandList={brandList}
					brandChecks={brandChecks}
				/>
			</aside>
			<div className={styles.filter}>
				<MyInput
					value={query}
					setValue={(e) => setQuery(e.currentTarget.value)}
					placeHolder='Поиск по названию...'
				/>
			</div>
			<ProductList list={usePaginate} />
			<PaginationBox setCurPage={setCurrentPage} pages={pages} />
		</div>
	);
};

export default ProductPage;
