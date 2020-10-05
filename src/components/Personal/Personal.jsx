import React from "react";
import s from "./Personal.module.scss";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Friends from "../Friends/Friends";

const Personal = (props) => {
	return (
		<section className={s.personal}>
			<PersonalInfo/>
			<Friends friends={props.state.friends}/>
		</section>
	)
}

export default Personal;
