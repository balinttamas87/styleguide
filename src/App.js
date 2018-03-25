import React, { Component } from "react";
import "./App.css";
import SidePanel from "./components/sidePanel/SidePanel";
import MainPage from "./components/mainPage/MainPage";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="app">
	        <SidePanel/>
	        <MainPage/>
	      </div>
      </Router>
    );
  }
}

export default App;
