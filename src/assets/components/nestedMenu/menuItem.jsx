import React, { useState } from "react";
import MenuList from "./menuList";

function MenuItem({ item }) {
  const [current, setcurrent] = useState({});
  function handlebtn(getlabel) {
    setcurrent({
      ...getlabel,
      [getlabel]: !current[getlabel],
    });
  }
  return (
    <div className="div">
      <div
        className="items"
        style={{ display: "flex", gap: "10px", marginTop: "10px" }}
      >
        <li>
          <p className="pItem">{item.label}</p>
        </li>
        {item && item.children && item.children.length ? (
          <span
            style={{
              marginTop: "15px",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
            onClick={() => handlebtn(item.label)}
          >
            +
          </span>
        ) : null}
        {item &&
        item.children &&
        item.children.length > 0 &&
        current[item.label] ? (
          <MenuList listitems={item.children} />
        ) : null}
      </div>
    </div>
  );
}

export default MenuItem;
