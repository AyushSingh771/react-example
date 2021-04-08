import React, { Component } from "react";
import Cart from "./Cart";
class Product extends Component {
  // It is loaded first and Constructors are only used for two purposes 1. Initializing local state by assigning an object to this.state 2. Binding event handler methods to an instance.
  constructor(props) {
    super(props);
    this.state = { productId: "", qty: 0, isCart: true };
  }

  addToCart = (pid) =>
    this.setState((state) => ({ productId: pid, qty: state.qty + 1 }));

  removeCart = () => this.setState({ isCart: false });

  render() {
    return (
      <div>
        <button onClick={() => this.addToCart(1)}>Add to Cart</button>
        <button onClick={() => this.addToCart(2)}>Add to Cart</button>
        <button onClick={() => this.addToCart(3)}>Add to Cart</button>
        {this.state.isCart && (
          <Cart productId={this.state.productId} qty={this.state.qty} />
        )}
        {!this.state.isCart && <h3>Cart has been removed</h3>}
        <button onClick={this.removeCart}>Remove Cart</button>
      </div>
    );
  }
}
export default Product;
