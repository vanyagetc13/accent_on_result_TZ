import React from "react";
import { IProduct } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

interface ProductListProps {
	list: IProduct[];
}

const ProductList = ({ list }: ProductListProps) => {
	return (
		<div className={styles.list}>
			{list.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
