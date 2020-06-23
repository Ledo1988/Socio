import {rerenderEntireTree} from "../render";

let state = {
	mainPage: {
		friends: [
			{id: 1, name: 'Sasha'},
			{id: 2, name: 'Maksim'},
			{id: 4, name: 'Xee'},
		]
	},
	profilePage: {
		posts: [
			{id: 1, message: 'Hi', likesCount: 12},
			{id: 2, message: 'How are you?', likesCount: 12},
			{id: 3, message: 'Where are you?', likesCount: 12},
			{id: 4, message: 'Bye', likesCount: 12},
			{id: 5, message: 'Hehey', likesCount: 12},
		],
		newPostText: 'it-post',
	},

	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Sasha'},
			{id: 2, name: 'Maksim'},
			{id: 3, name: 'Elena'},
			{id: 4, name: 'Xee'},
		],
		messages: [
			{id: 1, name: 'Friend', message: 'Hi!', likesCount: 12},
			{id: 2, name: 'Me', message: 'How are you?', likesCount: 1},
			{id: 3, name: 'Friend', message: 'Yo!', likesCount: 3},
			{id: 4, name: 'Me', message: 'Yo!Yo!', likesCount: 55},
		],
	},

};

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0,
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}


export default state;