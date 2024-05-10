import React, { useEffect } from "react";

function customtoggle(ref, method) {
  useEffect(() => {
    function handleevent(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      } else {
        method(event);
      }
    }
    document.addEventListener("mousedown", handleevent);
    document.addEventListener("touchstart", handleevent);
    return () => {
      document.removeEventListener("mousedown", handleevent);
      document.removeEventListener("touchstart", handleevent);
    };
  }, [ref, method]);
}
export default customtoggle;
