import React from "react";
import s from "./Post.module.scss";
import avatar from '../../../img/img_avatar.png';

const Post = (props) => {
	return (
		<div className={s.post}>
			<div className={s.postImg}>
				<img src={avatar} alt="Avatar"/>
			</div>
			<div className={s.postTitle}>{props.message}</div>
		</div>

)
}

export default Post;
