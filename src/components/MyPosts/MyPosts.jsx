import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";


const MyPosts = (props) => {

	let postsElements = props.profilePage
		.map( post => <Post message={post.message}/>);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	}


	return (
		<section className={s.post}>
			<h1 className={s.title}>My Posts</h1>
			<div>
				<textarea ref={newPostElement} onChange={onPostChange}></textarea>
				<button onClick={addPost}>Add post</button>
			</div>
			<div>{postsElements}</div>
		</section>
)
}

export default MyPosts;
