import React, { useRef, useState } from "react";
import "./style.css";
import customtoggle from "./customtoggle";
const PopupModelHook = () => {
  const [showToggle, setShowtoggle] = useState(false);
  const ref = useRef();
  customtoggle(ref, () => setShowtoggle(false));

  return (
    <div>
      {showToggle ? (
        <div className="customcontainer" ref={ref}>
          <h1>Now its showing Dude</h1>
          <p>You can click outside the box to Close!</p>
        </div>
      ) : (
        <button onClick={() => setShowtoggle(!showToggle)}>Click Here!</button>
      )}
    </div>
  );
};

export default PopupModelHook;
