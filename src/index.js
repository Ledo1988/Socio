import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
		</BrowserRouter>, document.getElementById('root') );
}


rerenderEntireTree(store.getState());
store.subscribe( () => {
	let state = store.getState()
	console.log(state)
	rerenderEntireTree(state);
});