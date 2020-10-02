const ADD_POST_DIALOG = 'ADD-POST-DIALOG';
const UPDATE_NEW_POST_TEXT_DIALOG = 'UPDATE-NEW-POST-TEXT-DIALOG';

let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {

	switch(action.type) {
		case ADD_POST_DIALOG:
			let newMessage = {
				id: 5,
				name: 'Me',
				message: state.newMessageText,
				likesCount: 0,
			};

			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;
		case UPDATE_NEW_POST_TEXT_DIALOG:
			state.newMessageText = action.newMessage;
			return state;
		default:
			return state;
	}

}

export const addDialogActionCreator = () => ({type: 'ADD-POST-DIALOG'});

export const updateNewDialogTextActionCreator = (text) => ({
	type: 'UPDATE-NEW-POST-TEXT-DIALOG',
	newMessage: text,})

export default dialogsReducer;


