const ADD_POST_DIALOG = 'ADD-POST-DIALOG';
const UPDATE_NEW_POST_TEXT_DIALOG = 'UPDATE-NEW-POST-TEXT-DIALOG';

const dialogsReducer = (state, action) => {

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

export default dialogsReducer;