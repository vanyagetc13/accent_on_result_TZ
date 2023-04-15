import React from "react";
import { Outlet, Link } from "react-router-dom";
import svg from "./assets/cart-svgrepo-com.svg";

function Layout() {
	return (
		<>
			<header className='header'>
				<nav className='nav'>
					<Link to={"/"}>Товары</Link>
					<Link to={"/cart"}>
						<img src={svg} alt='cart' width={22} />
					</Link>
				</nav>
			</header>
			<Outlet />
		</>
	);
}

export default Layout;
