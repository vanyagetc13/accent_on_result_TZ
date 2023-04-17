import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { IBrand, IBrandCheck, IProduct } from "../../types";
import styles from "./ProductPage.module.scss";
import brands from "../../assets/brands.json";
import products from "../../assets/products.json";
import {
	useFilteredProductList,
	useQueriedProductList,
} from "../../hooks/index";
import usePagination from "../../hooks/usePagination";

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
		currentPage
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
			<div className={styles.filter}>
				<div>
					<input
						type='text'
						value={query}
						onChange={(e) => {
							setQuery(e.currentTarget.value);
						}}
					/>
				</div>
				<div className={styles.brands}>
					<h4>Бренды</h4>
					<div className={styles.brands__collapse}>
						{brandList.map((brand) => {
							const brandCheck = brandChecks.find(
								(e) => e.code === brand.code
							);
							return (
								<div
									key={brand.code}
									className={styles.brand__wrapper}
								>
									<input
										type='checkbox'
										checked={brandCheck?.checked || false}
										onChange={() =>
											handleCheckBoxChange(brand.code)
										}
									/>
									<div>{brand.title}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className={styles.list}>
				{usePaginate.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<div className={styles.pagination}>
				{pages.map((page) => (
					<div
						key={`${page} + ${Number(new Date())}`}
						onClick={() => setCurrentPage(page)}
						className={styles.page}
					>
						{page}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductPage;
