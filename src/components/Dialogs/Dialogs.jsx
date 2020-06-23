import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs
		.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

	let messagesElements = props.state.messages
		.map( message => <Message message={message.message} name={message.name}/>);

	let newPostElement = React.createRef();

	let addMessage = () => {
		let post =  newPostElement.current.value;
		alert(post);
	}

	return (
		<section className={s.dialog}>
			<h1 className={s.dialogTitle}>Dialogs</h1>
			<ul className={s.dialogList}>
				{dialogsElements}
			</ul>
			<div className={s.message}>
				<ul className={s.messageList}>
					{messagesElements}
				</ul>
				<div className={s.dialogNew}>
					<div>
						<textarea ref={newPostElement}></textarea>
						<button onClick={addMessage}>Add Message</button>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Dialogs;
