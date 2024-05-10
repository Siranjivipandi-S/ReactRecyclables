import React from "react";
import { useState } from "react";
import "./stylepro.css";
function Themepro() {
  const [darkmode, setDarkmode] = useState(false);
  const bgcolor = darkmode ? "black" : "white";
  const fontcolor = darkmode ? "white" : "black";
  function changemode() {
    setDarkmode((prev) => !prev);
  }
  return (
    <div>
      <div className="container" style={{ backgroundColor: bgcolor }}>
        <h1 style={{ color: fontcolor }}>Hello Im Siranjivi</h1>
        <button
          style={{ backgroundColor: fontcolor, color: bgcolor }}
          onClick={changemode}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default Themepro;
