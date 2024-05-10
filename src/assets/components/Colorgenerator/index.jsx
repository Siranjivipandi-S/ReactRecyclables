import React, { useState } from "react";
import "./style.css";
const Randomcolor = () => {
  const [colortype, setColortype] = useState("hex");
  const [bgcolor, setBgcolor] = useState("pink");
  function lencolor(len) {
    return Math.floor(Math.random() * len);
  }
  function hexcolor() {
    let hex = "#";
    let word = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 1; i <= 6; i++) {
      hex += word[lencolor(word.length)];
    }
    setBgcolor(hex);
  }
  function rgbcolor() {
    const r = lencolor(256);
    const g = lencolor(256);
    const b = lencolor(256);
    setBgcolor(`rgb(${r},${g},${b})`);
  }
  return (
    <div className="container">
      <h1>Randomcolor</h1>
      <div
        className="clr"
        style={{
          backgroundColor: bgcolor,

          height: "500px",
          width: "600px",
          borderRadius: "20px",
        }}
      >
        <button onClick={() => setColortype("hex")}>Hex Color</button>
        <button onClick={() => setColortype("rgb")}>Rgb Color</button>
        <button onClick={colortype == "hex" ? hexcolor : rgbcolor}>
          Random Color
        </button>
        <br />
        <h1>
          {colortype == "hex"
            ? `Hex Color:  ${bgcolor}`
            : `RGB Color: ${bgcolor}`}
        </h1>
      </div>
    </div>
  );
};

export default Randomcolor;
