import React, { useState } from "react";
import data from "./data";
import "./style.css";
const Accordion = () => {
  const [selected, setselected] = useState(null);
  const [multiselected, setmultiselected] = useState(false);
  const [multivalue, setmultivalue] = useState([]);
  function handleselect(id) {
    setselected(id === selected ? null : id);
  }
  function multiselect(id) {
    let dummyarray = [...multivalue];
    const findoccur = dummyarray.indexOf(id);
    if (findoccur == -1) {
      dummyarray.push(id);
    } else {
      dummyarray.splice(findoccur, 1);
    }
    setmultivalue(dummyarray);
  }
  console.log(multivalue);
  return (
    <div className="wrapper">
      <h1>Created a Accordion Box</h1>
      <button onClick={() => setmultiselected(!multiselected)}>
        Enable MultiClick
      </button>
      {data && data.length > 0 ? (
        data.map((items) => (
          <div
            onClick={
              multiselected
                ? () => multiselect(items.id)
                : () => handleselect(items.id)
            }
            className="head"
          >
            <div className="item">
              <h1>{items.name}</h1>
              <span>+</span>
            </div>
            {multiselected && multivalue.indexOf(items.id) != -1 ? (
              <p>{items.email}</p>
            ) : selected === items.id ? (
              <p>{items.email}</p>
            ) : null}
          </div>
        ))
      ) : (
        <p>No Data Found!</p>
      )}
    </div>
  );
};

export default Accordion;
