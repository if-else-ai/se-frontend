import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Keyboard from "./pages/Keyboard";
import Customize from "./pages/Customize";
import Accesories from "./pages/Accesories";
import Tools from "./pages/Tools";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/UserProfile";

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
            <Keyboard />
          </Route>
          <Route path="/Customize">
            <Customize />
          </Route>
          <Route path="/Accesories">
            <Accesories />
          </Route>
          <Route path="/Tools">
            <Tools />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
