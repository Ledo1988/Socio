import React from "react";
import s from "./Friends.module.scss"
import FriendsItem from "./FriendsItem/FriendsItem";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Friends = (props) => {
	let friendsElements = props.friends
		.map( friend => <FriendsItem name={friend.name} id={friend.id}/>);


	return (
		<div className={s.friends}>
			<div className={s.friendsTitle}>Friends</div>
			<ul className={s.freiendsList}>
				{friendsElements}
			</ul>
		</div>
	)
}

export default Friends;
