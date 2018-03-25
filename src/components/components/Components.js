import React from "react";
import "./Components.css";
import Button from "../button/Button";
import Spacer from "../spacer/Spacer";
import CheckoutItemLine from "../checkoutItemLine/CheckoutItemLine";

const buttonStates = ["primary","success","warning","danger"];

export default () => (
	<div className="components-wrapper">
		<div className="buttons-wrapper">
			<h3 className="h3 buttons-title">Buttons</h3>
			<div className="buttons-inner">
			{
				buttonStates.map((state, index) => <Button state={state} key={`${state}-btn-${index}`}/>)
			}
			</div>
		</div>
		<Spacer/>
		<div className="checkout-basket-item-wrapper">
			<h3 className="h3 checkout-item-title">Checkout item line</h3>
			<CheckoutItemLine productPrice="30"/>
		</div>
	</div>
)