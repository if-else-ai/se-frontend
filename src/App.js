import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="page-container">
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/Keyboard">
						<Home />
					</Route>
					<Route path="/Customize">
						<Home />
					</Route>
					<Route path="/Accesories">
						<Home />
					</Route>
					<Route path="/Tools">
						<Home />
					</Route>
					<Route path="/Login">
						<Home />
					</Route>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
