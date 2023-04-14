import React from "react";
import { IProduct } from "../../types";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
	product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className={styles.card} key={product.id}>
			{product.title}
			<img src={product.image} alt={product.title} />
		</div>
	);
};

export default ProductCard;
