import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

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
		<MyPosts updateNewPostText={() => {}}/>
)
}

export default MyPostsContainer;
