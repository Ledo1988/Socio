import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import MyPosts from "./components/MyPosts/MyPosts";
import Menu from "./components/Menu/Menu";
import Personal from "./components/Personal/Personal";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Header/>
				<main className="app__main main ">
					<Intro/>
					<div className="main__view view ">
						<Menu/>
						<Personal/>
						<div className="view__content content">
							<Route path="/profile" component={MyPosts}/>
							<Route path="/dialogs" component={Dialogs}/>
							<Route path="/news" component={News}/>
							<Route path="/music" component={Music}/>
							<Route path="/settings" component={Settings}/>
						</div>
					</div>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;