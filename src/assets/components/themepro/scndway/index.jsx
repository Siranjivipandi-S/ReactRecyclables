import React from "react";
import customHook from "./customHook";
import "./style.css";
function ThemeusingHook() {
  const [theme, setTheme] = customHook("theme", "dark");
  function tooglemode() {
    setTheme(theme == "light" ? "dark" : "light");
  }
  return (
    <div className="theme-container" datatheme={theme}>
      <div className="container">
        <h1>Hello Sivi! Now Your using the Custom Hook Method!</h1>
        <button onClick={tooglemode}>Change Theme</button>
      </div>
    </div>
  );
}

export default ThemeusingHook;
