import React from "react";
import "./Colors.css";
import Color from "../color/Color";

const colors = ["111111", "2F80ED", "56CCF2", "f3f2f2", "fafaf9","ffffff"];

export default () => (
	<div className="colors-wrapper">
		<section className="colors-section">
			<h3 className="colors-heading">Colors</h3>
			<ul className="colors-list">
				{
					colors.map((hex) => <Color hexValue={hex}/>)
				}
			</ul>
		</section>
	</div>
)	