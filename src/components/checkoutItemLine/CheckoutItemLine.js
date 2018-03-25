import React from "react";
import "./CheckoutItemLine.css";

export default () => (
	<div className="checkout-basket-item-inner">
		<p>product name</p>
		<p>product price</p>
		<button>-</button>
		<input type="number"/>
		<button>+</button>
		<p>total value</p>
	</div>	
)