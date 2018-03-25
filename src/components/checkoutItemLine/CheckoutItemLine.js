import React, {Component} from "react";
import "./CheckoutItemLine.css";

class CheckoutItemLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalValue: 0,
      productQuantity: 1
    };

    this.subtractQuantity = this.subtractQuantity.bind(this);
  }

  subtractQuantity() {
  	this.setState({productQuantity: this.state.productQuantity -1});
  }

  render() {
    return (
			<div className="checkout-basket-item-inner">
				<p className="product-name">product name</p>
				<p className="product-price">30</p>
				<button onClick={this.subtractQuantity} id="button-subtract" className="button-subtract">-</button>
				<input id="product-quantity" className="product-quantity" type="number" value={this.state.productQuantity}/>
				<button id="button-add" className="button-add">+</button>
				<p id="total-value">{this.state.totalValue}</p>
			</div>
    );
  }

}

export default CheckoutItemLine;
