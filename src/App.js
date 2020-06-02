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

const App = (props) => {


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
							<Route path="/profile" render={ () => <MyPosts postData={props.postData}/>}/>
							<Route path="/dialogs" render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
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