// Functional components can potentially have a better performance.
// Functional components are easy to test
import React, { Component } from "react";
import Child from "./child";
class Display extends Component {
  state = {
    disp: "",
  };
  render() {
    return (
      <form>
        <input
          onChange={(event) => this.setState({ disp: event.target.value })}
        ></input>
        {/* <p>{this.state.disp}</p> */}
        <Child data={this.state.disp}></Child>
      </form>
    );
  }
}
export default Display;
