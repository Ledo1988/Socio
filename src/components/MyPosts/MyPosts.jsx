import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<section className={s.post}>
			<h1 className={s.title}>My Posts</h1>
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<Post message='Hi'/>
			<Post message='How are you?'/>
			<Post message='Where are you?'/>
			<Post message='Bye'/>
		</section>
)
}

export default MyPosts;
