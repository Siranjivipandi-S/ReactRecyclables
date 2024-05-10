import React from "react";
import MenuList from "./menuList";

function NestedMenu({ data = [] }) {
  return (
    <div>
      <MenuList listitems={data} />
    </div>
  );
}

export default NestedMenu;
