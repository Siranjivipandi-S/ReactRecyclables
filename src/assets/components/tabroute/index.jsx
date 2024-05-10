import React from "react";
import TabChild from "./tabs";

function ParentTab() {
  const tabs = [
    {
      label: "Tab1",
      content: "Tab1 Content from Menu",
    },
    {
      label: "Tab2",
      content: "Tab2 Content from Menu",
    },
    {
      label: "Tab3",
      content: "Tab3 Content from Menu",
    },
  ];
  return <TabChild tabs={tabs} />;
}

export default ParentTab;
