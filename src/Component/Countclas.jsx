import React, { Component } from "react";

export default class Clascount extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  reset = () => {
    this.setState({
      count: this.state.count = 0,
    });
  };
  render() {
    return (
     <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <div
        className="mt-5 p-5 text-white shadow"
        style={{
          backgroundColor: "lightcoral",
          width: "590px",
          height: "290px",
          borderRadius: "20px",
          fontSize: "20px",
        }}
      >
        <h1>Count</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment} className="btn btn-light p-3 fs-5">
          Increment
        </button>
        <button
          onClick={this.decrement}
          className="btn btn-light p-3 fs-5 ms-3 me-3"
        >
          Decrement
        </button>
        <button onClick={this.reset} className="btn btn-light p-3 fs-5">
          Reset
        </button>
      </div>
      </div>
    );
  }
}

{
  /* <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button> */
}
