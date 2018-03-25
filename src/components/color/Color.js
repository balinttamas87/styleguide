import React from "react";
import "./Color.css";

export default ({hexValue}) => (
	<div className="color-wrapper">
		<div className={`color-box-${hexValue}`}></div>
		<p>{`#${hexValue}`}</p>
	</div>
)