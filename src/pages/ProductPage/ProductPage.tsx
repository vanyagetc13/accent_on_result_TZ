import React from "react";
import products from "../../assets/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import { IProduct } from "../../types";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
	const productList: IProduct[] = products;
	return (
		<div className={styles.page}>
			<div className={styles.filter__wrapper}>
				<input type='text' />
			</div>
			<div className={styles.list}>
				{productList.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<div className={styles.pagintaion}></div>
		</div>
	);
};

export default ProductPage;
