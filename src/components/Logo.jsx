import React from "react";

const Logo = () => {
	return (
		<div className="header__logo logo">
			<div className="logo__img"><img src={require("../img/img_logo.png")} width="50" height="50"/></div>
			<div className="logo__title">Socio</div>
		</div>
	)
}

export default Logo;
