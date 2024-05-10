import React, { useState } from "react";
import "./popup.css";
import Popup from "./popup";
function PopupModel() {
  const [pop, setPop] = useState(false);
  function handleclick() {
    setPop(!pop);
  }
  return (
    <div>
      <h1>Popup Model</h1>
      {pop == false ? (
        <button onClick={handleclick} className="btn">
          Open popup
        </button>
      ) : null}
      {pop && (
        <Popup
          id={1}
          close={handleclick}
          body={<div>Hey Sivi u doing Good</div>}
          footer={"Created By Sivi"}
        />
      )}
    </div>
  );
}

export default PopupModel;
