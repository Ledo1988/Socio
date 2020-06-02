import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


	let dialogsElements = props.dialogsData
		.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

	let messagesElements = props.messagesData
		.map( message => <Message message={message.message}/>);

	return (
		<section className={s.dialog}>
			<h1 className={s.dialogTitle}>Dialogs</h1>
			<ul className={s.dialogList}>
				{dialogsElements}
			</ul>
			<div className={s.messageList}>
				{messagesElements}
			</div>
		</section>
	)
}

export default Dialogs;
