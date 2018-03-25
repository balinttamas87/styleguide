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
    this.addQuantity = this.addQuantity.bind(this);
    this.calculateTotalValue = this.calculateTotalValue.bind(this);
    this.setTotalValue = this.setTotalValue.bind(this);

  }

  subtractQuantity() {
  	this.setState({productQuantity: this.state.productQuantity - 1});
  }

  addQuantity() {
  	this.setState({productQuantity: this.state.productQuantity + 1});
  }

  calculateTotalValue(value) {
		return this.props.productPrice * value;
  }

  setTotalValue(event) {
  	this.setState({totalValue: this.calculateTotalValue(event.target.value)});
  }

  componentDidMount() {
  	this.setTotalValue({target: {value: 1}});
  }

  render() {
    return (
			<div className="checkout-basket-item-inner">
				<p className="product-name">product name</p>
				<p className="product-price">{this.props.productPrice}</p>
				<button onClick={this.subtractQuantity} id="button-subtract" className="button-subtract">-</button>
				<input onChange={this.setTotalValue} defaultValue={this.state.productQuantity} id="product-quantity" className="product-quantity" type="number"/>
				<button onClick={this.addQuantity} id="button-add" className="button-add">+</button>
				<p id="total-value">{this.state.totalValue}</p>
			</div>
    );
  }

}

export default CheckoutItemLine;
