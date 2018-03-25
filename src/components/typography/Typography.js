import React from "react";
import "./Typography.css";
import Spacer from "../spacer/Spacer";

export default () => (
	<div className="typography-wrapper">
		<section className="typography-section">
			<h3 className="h3">Typography</h3>
			<ul className="typography-list">
				<li>
					<h4 className="h4">Headings</h4>
					<Spacer/>
					<p className="font-family-item">font-family: sans-serif</p>
				</li>
				<Spacer/>
				<li>
					<h4 className="h4">Paragraph</h4>
					<Spacer/>
					<p className="font-family-item">font-family: serif</p>
				</li>
			</ul>
		</section>
	</div>
)