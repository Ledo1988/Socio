const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST_DIALOG = 'ADD-POST-DIALOG';
const UPDATE_NEW_POST_TEXT_DIALOG = 'UPDATE-NEW-POST-TEXT-DIALOG';

let store = {
	_state: {
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
			newMessageText: 'it-message',
		},
	},
	_callSubscriber (){},

	getState() {
		return this._state;
	},
	subscribe(observer) {this._callSubscriber = observer;},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === ADD_POST_DIALOG) {
			let newMessage = {
				id: 5,
				name: 'Me',
				message: this._state.dialogsPage.newMessageText,
				likesCount: 0,
			};

			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT_DIALOG) {
			this._state.dialogsPage.newMessageText = action.newMessage;
			this._callSubscriber(this._state);
		}

	},
}

export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const updateNewPostTextActionCreator = (text) => ({
		type: 'UPDATE-NEW-POST-TEXT',
		newText: text,})

export const addDialogActionCreator = () => ({type: 'ADD-POST-DIALOG'});

export const updateNewDialogTextActionCreator = (text) => ({
	type: 'UPDATE-NEW-POST-TEXT-DIALOG',
	newMessage: text,})

export default store;
window.store = store;