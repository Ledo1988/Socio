import React from "react";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import View from "./components/View/View";

const App = () => {
	return (
		<div className="app">
			<Header/>
			<main className="main">
				<Intro/>
				<View/>
			</main>
		</div>
	);
}

export default App;