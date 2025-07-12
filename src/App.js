import React, { useState } from "react";
import Theme from "./Component/Theme";
import Countclas from "./Component/Countclas";
import Multiplycls from "./Component/Multiplycls";
import Counting from "./Component/Counting";

function App() {
  const [theme, setTheme] = useState("light");

  const main = {
    light: {
      backgroundColor: "white",
      color: "black",
      padding: "50px",
      height: "100%",
      width: "100%",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
      padding: "50px",
      height: "100%",
      width: "100%",
    },
  };

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={main[theme]}>
      <h2 style={{ textAlign: "center" }}>Theme Box</h2>
      <div style={{ textAlign: "center" }}>
        <button onClick={toggle} className="btn mb-3 p-3 fs-5 mt-4 btn-dark">
          {theme === "light" ? "dark" : "light"} Mode
        </button>

        <Theme theme={theme} />
        <Countclas/>
        <Counting/>
        <Multiplycls/>
      </div>
    </div>
  );
}
export default App;
