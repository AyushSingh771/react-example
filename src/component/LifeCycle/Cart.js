import React, { Component } from "react";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { qty: this.props.qty };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.qty !== state.qty) {
      return { qty: props.qty };
    }
    return null;
  }

  componentDidMount() {
    console.log("Invoked immediately after component render");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.qty !== nextProps.qty) {
      console.log("should component update");
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.productId !== prevProps.productId) {
      console.log("component updated");
    }
  }

  componentWillUnmount() {
    console.log("component is unmounted and destroyed");
  }

  render() {
    return (
      <div>
        <h2>Cart Items ({this.state.qty})</h2>
      </div>
    );
  }
}

export default Cart;
