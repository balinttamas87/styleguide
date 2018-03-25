import React from "react";
import "./Components.css";
import Button from "../button/Button";

const buttonStates = ["primary","success","warning","danger"];

export default () => (
	<div className="components-wrapper">
		<div className="buttons-wrapper">
			<h3 className="h3">Buttons</h3>
			{
				buttonStates.map((state) => <Button state={state}/>)
			}
		</div>
	</div>
)