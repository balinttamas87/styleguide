import React from "react";
import "./Styles.css";
import Typography from "../typography/Typography";
import Colors from "../colors/Colors";
import Spacer from "../spacer/Spacer";

export default () => (
	<div className="styles-wrapper">
		<Typography/>
		<Spacer/>
		<Colors/>
	</div>
)