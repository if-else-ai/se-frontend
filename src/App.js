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
				<Route exact path="/">
					<Home />
				</Route>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
