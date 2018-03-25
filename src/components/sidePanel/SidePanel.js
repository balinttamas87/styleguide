import React from "react";
import "./SidePanel.css";
import {Link} from "react-router-dom";

class SidePanel extends React.Component {
	render() {
		return (
			<div className="side-panel-wrapper">
				<Link to="/" className="side-panel-header-link">
					<header className="side-panel-header">
						<h1 className="main-heading">Style guide</h1>
					</header>
				</Link>
				<nav className="side-panel-nav">
					<ul>
						<Link to="/styles">
							Styles
						</Link>
						<Link to="components">
							Components
						</Link>
					</ul>
				</nav>
			</div>
		)
	}
}

export default SidePanel;