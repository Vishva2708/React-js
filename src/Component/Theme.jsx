import React from "react";

const Theme = ({ theme }) => {
  const themes = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
    },
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
    <div className="p-4 rounded shadow mb-4 w-50" style={themes[theme]}>
      <h3 style={themes[theme]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod
        illum minus excepturi placeat eius in cupiditate fugiat aspernatur
        praesentium labore, officia at ex quibusdam illo soluta laudantium esse
        dicta.
      </h3>
    </div>
    </div>
  );
};
export default Theme;
