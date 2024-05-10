import React, { useEffect, useState } from "react";

function customHook({ key, defaultvalue }) {
  const [thememode, setThememode] = useState(() => {
    let currentvalue;
    try {
      currentvalue =
        JSON.parse(localStorage.getItem(key)) || JSON.stringify(defaultvalue);
    } catch (e) {
      currentvalue = defaultvalue;
    }
    return currentvalue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(thememode));
  }, [key, thememode]);
  return [thememode, setThememode];
}

export default customHook;
