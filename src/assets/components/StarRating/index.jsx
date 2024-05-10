import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import "./style.css";
function StarRating({ noofstart = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function mouseenter(index) {
    setRating(index);
  }
  function hovermouse(index) {
    setHover(index);
  }
  function mouseleave(index) {
    setHover(rating);
  }
  return (
    <div className="container">
      <h1>Star Rating</h1>
      <div className="div">
        {[...Array(noofstart)].map((_, index) => {
          index += 1;
          return (
            <CiHeart
              className={index <= (rating || hover) ? "active" : "inactive"}
              key={index}
              size={70}
              onClick={() => mouseenter(index)}
              onMouseMove={() => hovermouse(index)}
              onMouseLeave={() => mouseleave(index)}
            ></CiHeart>
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
