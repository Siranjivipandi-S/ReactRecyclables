import React from "react";

function Suggest({ user, handleclick }) {
  return (
    <div>
      {user && user.length ? (
        <ul>
          {user.map((item, index) => (
            <li onClick={handleclick} key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Suggest;
