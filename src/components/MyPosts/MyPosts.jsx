import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {

	let postData = [
		{id: 1, message: 'Hi', likesCount: 12},
		{id: 2, message: 'How are you?', likesCount: 12},
		{id: 3, message: 'Where are you?', likesCount: 12},
		{id: 4, message: 'Bye', likesCount: 12},
		{id: 5, message: 'Hehey', likesCount: 12},
	];

	let postsElements = postData
		.map( post => <Post message={post.message}/>)

	return (
		<section className={s.post}>
			<h1 className={s.title}>My Posts</h1>
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div>{postsElements}</div>
		</section>
)
}

export default MyPosts;
