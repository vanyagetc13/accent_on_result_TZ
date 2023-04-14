import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
	return (
		<>
			<header className='header'>
				<nav>
					<Link to={"/"}>Товары</Link>
					<Link to={"/cart"}>Корзина</Link>
				</nav>
			</header>
			<Outlet />
		</>
	);
}

export default Layout;
