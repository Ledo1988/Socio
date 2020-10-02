import React from "react";
import s from "./Logo.module.scss";
import logo from '../../../img/img_logo.png';

const Logo = () => {
	return (
		<a href='/' className={s.link}>
			<div className={s.img}><img src={logo} width="50" height="50"/></div>
			<div className={s.title}>Socio</div>
		</a>
	)
}

export default Logo;
