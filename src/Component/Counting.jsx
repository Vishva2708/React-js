import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <div
        className="mt-5 p-5 text-white shadow"
        style={{
          backgroundColor: "lightgreen",
          width: "590px",
          height: "290px",
          borderRadius: "20px",
          fontSize: "20px",
        }}
      >
        <h1>Count</h1>
        <h1>{count}</h1>
        <button onClick={increment} className="btn btn-light p-3 fs-5">
          Increment
        </button>
        <button
          onClick={decrement}
          className="btn btn-light p-3 fs-5 ms-3 me-3"
        >
          Decrement
        </button>
        <button onClick={reset} className="btn btn-light p-3 fs-5">
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
