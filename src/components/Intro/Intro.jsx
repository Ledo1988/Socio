import React from "react";
import s from "./Intro.module.scss";
import profile from "../../img/img_profile-bg.jpg";
import personal from "../../img/img_profile.jpg";

const Intro = () => {
	return (

		<section className={s.header}>
			<div className={s.img}>
				<img src={profile} alt="Profile" height="250"/>
			</div>
			<div className={s.linkWrapper}>
				<a href="#" className={s.link}>
					<div className={s.profileImg}>
						<img src={personal} alt="Personal" width="130" height="130"/>
					</div>
					<div className={s.profileName}>Elena</div>
				</a>
			</div>
		</section>

)
}

export default Intro;
