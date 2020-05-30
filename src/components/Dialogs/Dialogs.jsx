import React from "react";
import s from "./Dialogs.module.scss";

const Dialogs = (props) => {
	return (
		<section className={s.dialog}>
			<h1 className={s.dialogTitle}>Dialogs</h1>
			<ul className={s.dialogList}>
				<li className={s.dialogItem + ' ' + s.active}>
					Sasha
				</li>
				<li className={s.dialogItem}>
					Maksim
				</li>
				<li className={s.dialogItem}>
					Elena
				</li>
			</ul>
			<div className={s.messageList}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>How are you</div>
				<div className={s.message}>Yo</div>
			</div>
		</section>
	)
}

export default Dialogs;
