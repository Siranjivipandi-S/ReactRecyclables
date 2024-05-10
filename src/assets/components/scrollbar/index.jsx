import React, { useEffect, useState } from "react";
import "./style.css";
function Scrollbar({ url }) {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [scrollpercent, setScrollpercent] = useState();
  async function loaddata(geturl) {
    try {
      setLoading(true);
      const res = await fetch(geturl);
      const data = await res.json();
      if (data) {
        setLoading(false);
        setdata(data);
      }
    } catch (error) {
      setError(true);
    }
  }
  useEffect(() => {
    loaddata(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handlepercentage);
    return () => window.removeEventListener("scroll", () => {});
  });

  function handlepercentage() {
    const percent =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.body.scrollHeight - document.documentElement.clientHeight;
    setScrollpercent((percent / height) * 100);
  }
  console.log(scrollpercent);
  if (error) {
    return (
      <div>
        <p>Error In a Code</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <h1>Loading Code.</h1>
      </div>
    );
  }
  return (
    <div className="containers">
      <div className="wrappers">
        <h2>Product Items</h2>
        <div className="scrollbar" style={{ width: `${scrollpercent}%` }}></div>
      </div>
      <div className="data">
        {data && data.products
          ? data.products.map((items) => <p key={items.id}>{items.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default Scrollbar;
