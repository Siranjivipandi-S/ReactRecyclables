import React from "react";
import MenuItem from "./menuItem";
import "./style.css";
function MenuList({ listitems = [] }) {
  return (
    <ul>
      {listitems && listitems.length
        ? listitems.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  );
}

export default MenuList;
