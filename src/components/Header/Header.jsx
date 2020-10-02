import React from "react";
import s from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
	return (
		<div className="header--wrapper">
			<header className={s.header}>
				<Logo/>
				<Navbar/>
			</header>
		</div>
	)
}

export default Header;
