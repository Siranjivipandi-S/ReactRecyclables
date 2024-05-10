import React, { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
function SlideImage({ url, limit = 5 }) {
  const [currenslide, setCurrentslide] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [image, setImage] = useState([]);

  async function fetchimage(geturl) {
    try {
      setLoading(true);
      const res = await fetch(`${geturl}&limit=${limit}`);
      const data = await res.json();
      if (data) {
        setLoading(false);
        setImage(data);
      }
    } catch {
      setLoading(false);
      setErr(true);
    }
  }
  useEffect(() => {
    if (url != "") {
      fetchimage(url);
    }
  }, [url]);
  if (loading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
  function nexttab() {
    setCurrentslide(currenslide === image.length - 1 ? 0 : currenslide + 1);
  }
  function prevtab() {
    setCurrentslide(currenslide === 0 ? image.length - 1 : currenslide - 1);
  }
  return (
    <div className="container">
      <h1>Image Slider</h1>
      <BsArrowLeftCircleFill
        size={50}
        className="arrow-left"
        onClick={prevtab}
      />
      <BsArrowRightCircleFill
        size={50}
        className="arrow-right"
        onClick={nexttab}
      />
      <div className="wrapper">
        {image && image.length
          ? image.map((imageitem, index) => (
              <img
                src={imageitem.download_url}
                alt={imageitem.download_url}
                key={index}
                className={
                  currenslide === index
                    ? "image-active"
                    : "image-active hide-unactive"
                }
              />
            ))
          : null}

        <span className="circlebtn">
          {image && image.length
            ? image.map((_, index) => (
                <button
                  className={
                    currenslide === index
                      ? "Btn-status"
                      : "Btn-status status-inactive"
                  }
                  onClick={() => setCurrentslide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
export default SlideImage;
