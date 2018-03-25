import React from "react";
import "./Colors.css";
import Color from "../color/Color";

const colors = ["111111", "2F80ED", "56CCF2", "f3f2f2", "fafaf9","ffffff"];

export default () => (
	<div className="colors-wrapper">
		<section className="colors-section">
			<h3 className="colors-heading h3">Colors</h3>
			<ul className="colors-list">
				{
					colors.map((hex, index) => <Color hexValue={hex} key={`hex-${index}-${hex}`}/>)
				}
			</ul>
		</section>
	</div>
)	