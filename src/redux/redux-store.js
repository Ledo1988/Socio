import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import mainpageReducer from "./mainpage-reducer";



let reducers = combineReducers({
	profileReducer: profileReducer,
	dialogsReducer: dialogsReducer,
	sidebarReducer: sidebarReducer,
	mainpageReducer: mainpageReducer,
});

let store = createStore(reducers);

export default store;