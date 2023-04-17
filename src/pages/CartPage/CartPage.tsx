import React from "react";
import cart from "../../store/cart";
import { observer } from "mobx-react-lite";
import styles from "./CartPage.module.scss";

const CartPage = observer(() => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.list}>
				{cart.cart.map((item) => (
					<div key={item.id} className={styles.item}>
						<div>
							<img src={item.image} alt='png' width={50} />
							<div>{item.title}</div>
						</div>
						<div className={styles.prices}>
							<div>
								{item.regular_price.value}
								{" " + item.regular_price.currency}
							</div>
							<div className={styles.counts}>
								<button
									disabled={cart.getCountById(item.id) === 1}
									onClick={() => cart.minusProduct(item.id)}
								>
									-
								</button>
								<div>{item.count}</div>
								<button
									onClick={() => cart.plusProduct(item.id)}
								>
									+
								</button>
							</div>
							<button
								style={{ color: "red" }}
								onClick={() => cart.removeProduct(item.id)}
							>
								X
							</button>
						</div>
					</div>
				))}
			</div>
			<div className={styles.sum}>
				<div>
					{cart.CartLength} товаров на сумму:{" "}
					{Math.round(cart.totalPrice.count * 100) / 100}{" "}
					{cart.totalPrice.currency}
				</div>
			</div>
		</div>
	);
});

export default CartPage;
