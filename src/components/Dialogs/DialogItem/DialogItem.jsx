import React from "react";
import s from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;

	return <li className={s.dialogItem + ' ' + s.active}>
		<NavLink to={path}>{props.name}</NavLink>
	</li>
}

export default DialogItem;
