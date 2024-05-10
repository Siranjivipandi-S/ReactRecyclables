import React, { useState } from "react";

function TabChild({ tabs }) {
  const [currentIndex, setCurrentIndex] = useState();
  function handleclick(getindex) {
    setCurrentIndex(getindex);
  }
  return (
    <div>
      <h1>Tabular Content</h1>
      {tabs &&
        tabs.map((item, index) => (
          <div
            className={index == currentIndex ? "active" : "inactive"}
            key={index}
            onClick={() => handleclick(index)}
          >
            <h2>{item.label}</h2>
          </div>
        ))}
      <div className="data">
        {tabs && tabs[currentIndex] && <p>{tabs[currentIndex].content}</p>}
      </div>
    </div>
  );
}

export default TabChild;
