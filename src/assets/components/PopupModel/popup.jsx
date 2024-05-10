import React from "react";
import "./popup.css";
function Popup({ id, body, footer, header, close }) {
  return (
    <div className="popup-wrapper">
      <div className="popup-container" id={id}>
        <div className="tooglebtn" onClick={close}>
          &times;
        </div>
        <div className="popup-content">{header ? header : "Popup Box"}</div>
        <div className="popup-body">{body ? body : "Still Left"}</div>
        <div className="popup-footer">{footer ? footer : "Empty Content"}</div>
      </div>
    </div>
  );
}

export default Popup;
