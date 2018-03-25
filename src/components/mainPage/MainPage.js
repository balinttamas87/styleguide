import React from "react";
import "./MainPage.css";
import Styles from "../styles/Styles";
import Components from "../components/Components";
import Guidelines from "../guidelines/Guidelines";
import {Route} from "react-router-dom";

export default () => (
		<div className="main-page-wrapper">
			<header className="main-page-header">
				<h2 className="main-page-heading">Page title</h2>
			</header>
			<div className="main-page-content-wrapper">
				<Route exact path="/" component={Guidelines}/>
				<Route path="/styles" component={Styles}/>
				<Route path="/components" component={Components}/>
			</div>
		</div>
)

