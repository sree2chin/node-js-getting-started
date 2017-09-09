import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

//Components                           
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hello: "hello world",
			
		}
	}

	render() {
		return(
			<div>
				Hello world
			</div>
		)
	}
}

// this takes two arguments one is component and the other is dom element
              //. what we want to render and where to render.
ReactDOM.render(<App/>, document.querySelector("#s-root"));
// ReactDOM.render(<BrowserRouter> 
// 	 				<div>
// 	 					<header>
// 				            <Link to="/">Home</Link> <br/>
// 				            <Link to="/posts">Posts</Link><br/>
// 				            <Link to="/profile">Profile</Link><br/>
// 				            <hr/>
// 				        </header>
// 				        <Switch>
// 					        <Route path="/posts/:id" component={PostsItem}></Route>
// 					        <Route path="/profile" component={Profile}></Route>
// 					        <Route path="/posts" component={Posts}></Route>
// 		 					<Route exact path = "/" component={App}></Route>
// 		 					<Route path = "*" component={NotFound}></Route>
// 						</Switch>
// 					</div>
// 	            </BrowserRouter>, document.querySelector("#root"));



