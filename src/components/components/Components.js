import React from "react";
import "./Components.css";
import Button from "../button/Button";

const buttonStates = ["primary","success","warning","danger"];

export default () => (
	<div className="components-wrapper">
	{
		buttonStates.map((state) => <Button state={state}/>)
	}
	</div>
)