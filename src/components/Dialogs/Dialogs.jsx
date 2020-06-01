import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'Sasha'},
		{id: 2, name: 'Maksim'},
		{id: 3, name: 'Elena'},
		{id: 4, name: 'Xee'},
	];

	let messagesData = [
		{id: 1, message: 'Hi!', likesCount: 12},
		{id: 2, message: 'How are you?', likesCount: 1},
		{id: 3, message: 'Yo!', likesCount: 3},
		{id: 4, message: 'Yo!Yo!', likesCount: 55},
	];

	let dialogsElements = dialogsData
		.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

	let messagesElements = messagesData
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
