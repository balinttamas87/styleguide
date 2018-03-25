import React from "react";
import "./Button.css";

export default ({state}) => (
	<button className={`button button-${state}`}>Click</button>
)