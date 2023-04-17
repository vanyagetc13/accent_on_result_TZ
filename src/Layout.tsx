import React from "react";
import { Outlet, Link } from "react-router-dom";
import svg from "./assets/cart-svgrepo-com.svg";
import cart from "./store/cart";
import { observer } from "mobx-react-lite";

const Layout = observer(() => {
	return (
		<>
			<header className='header'>
				<nav className='nav'>
					<Link to={"/"}>Товары</Link>
					<div className="cart">
						<Link to={"/cart"}>
							<img src={svg} alt='cart' width={22} />
						</Link>
						<span>({cart.CartLength})</span>
					</div>
				</nav>
			</header>
			<Outlet />
		</>
	);
});

export default Layout;
