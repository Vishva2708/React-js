import React, { Component } from "react";

export default class Multicls extends Component {
  constructor() {
    super();
    this.state = {
      no: "",
    };
  }

  multiply = () => {
    this.setState({ no: this.state.no * 5 });
  };

  handlechange = (e) => {
    this.setState({ no: e.target.value });
  };

  render() {
    return (
      <div
        className="mx-auto bg-primary text-white text-center mt-5 p-5 shadow p-4"
        style={{ width: "500px", height: "230px", borderRadius: "20px" }}
      >
        <h2 className="text-center fw-bold mb-4">Multiplication</h2>
          <h3 className="mb-3">Result: {this.state.no}</h3>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <input
            type="number"
            value={this.state.no}
            onChange={this.handlechange}
            placeholder="Enter a number"
            style={{
              width: "300px",
              height: "50px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          />
          <button
            onClick={this.multiply}
            className="btn btn-light"
            style={{ borderRadius: "15px", width: "200px", height: "40px" }}
          >
            Multiply
          </button>
        </div>
      </div>
    );
  }
}
{
  /* <input type='text' value={this.state.no} onChange={(e)=>{this.setState({no:e.target.value})}}/> */
}
