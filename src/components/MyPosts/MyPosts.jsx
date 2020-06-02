import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {



	let postsElements = props.postData
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
