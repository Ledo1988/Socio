import React from "react";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const App = () => {
	return (
		<div className="app">
			<Header/>
			<Profile/>
		</div>
	);
}

export default App;