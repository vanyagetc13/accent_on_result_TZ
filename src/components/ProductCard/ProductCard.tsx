import React from "react";
import cart from "../../store/cart";
import { IProduct } from "../../types";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
	product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className={styles.card} key={product.id}>
			<img src={product.image} alt={product.title} />
			<h4>{product.title}</h4>
			<div className={styles.bot}>
				<div
					className={styles.price}
				>{`${product.regular_price.value} ${product.regular_price.currency}`}</div>
				<div
					className={styles.add}
					onClick={() => {
						cart.addProduct(product);
					}}
				>
					<img src='./images/add.png' alt='add' height={20} />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
