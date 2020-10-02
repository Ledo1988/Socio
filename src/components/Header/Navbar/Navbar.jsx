import React from "react";
import s from "./Nav.module.scss";

const ProfileMenu = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.list}>
				<li className={s.listItem}>
					<a href="#" className={s.listLink}>Home</a>
				</li>
				<li className={s.listItem}>
					<a href="#" className={s.listLink}>Community</a>
				</li>
				<li className={s.listItem}>
					<a href="#" className={s.listLink}>Portfolio</a>
				</li>
			</ul>
		</nav>
	)
}

export default ProfileMenu;
