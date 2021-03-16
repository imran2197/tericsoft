import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../styles/Highlights.css";
import BMX from "./BMX";
import Mountain from "./Mountain";
import Road from "./Road";
import Track from "./Track";

class Highlights extends React.Component {
	render() {
		return (
			<>
				<Router>
					<div className="link_container">
						<Link to="/" className="link">
							BMX
						</Link>
						<Link to="/Mountain" className="link">
							Mountain
						</Link>
						<Link to="/Road" className="link">
							Road
						</Link>
						<Link to="/Track" className="link">
							Track
						</Link>
					</div>
					<Switch>
						<Route exact path="/">
							<BMX />
						</Route>
						<Route exact path="/Mountain">
							<Mountain />
						</Route>
						<Route exact path="/Road">
							<Road />
						</Route>
						<Route exact path="/Track">
							<Track />
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
}

export default Highlights;
