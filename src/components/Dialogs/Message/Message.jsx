import React from "react";
import s from "./Message.module.scss";
import avatar from '../../../img/img_avatar.png';

const Message = (props) => {
	if (props.name === 'Me') {
		return (

			<li className={`${s.message} ${s.messageMe}`}>
				<div className={s.messageName}>
					<div className={s.messageImg}>
						<img src={avatar} alt="Avatar"/>
					</div>
					<span className={s.messageTitle}>{props.name}</span>
				</div>
				<div className={s.messageText}>
					{props.message}
				</div>
			</li>

		)
	} else {
		return (
			<li className={s.message}>
				<div className={s.messageName}>
					<div className={s.messageImg}>
						<img src={avatar} alt="Avatar"/>
					</div>
					<span className={s.messageTitle}>{props.name}</span>
				</div>
				<div className={s.messageText}>
					{props.message}
				</div>
			</li>

		)
	}

}
export default Message;
