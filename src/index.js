import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

let dialogsData = [
	{id: 1, name: 'Sasha'},
	{id: 2, name: 'Maksim'},
	{id: 3, name: 'Elena'},
	{id: 4, name: 'Xee'},
];

let messagesData = [
	{id: 1, message: 'Hi!', likesCount: 12},
	{id: 2, message: 'How are you?', likesCount: 1},
	{id: 3, message: 'Yo!', likesCount: 3},
	{id: 4, message: 'Yo!Yo!', likesCount: 55},
];

let postData = [
	{id: 1, message: 'Hi', likesCount: 12},
	{id: 2, message: 'How are you?', likesCount: 12},
	{id: 3, message: 'Where are you?', likesCount: 12},
	{id: 4, message: 'Bye', likesCount: 12},
	{id: 5, message: 'Hehey', likesCount: 12},
];

ReactDOM.render( <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>, document.getElementById('root') );