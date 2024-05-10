import React, { useEffect, useState } from "react";
import "./style.css";
function Productlimit() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [disablebtn, setDisablebtn] = useState(false);
  async function fetchproduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const datas = await response.json();
      if (datas) {
        setLoading(false);
        setProduct((prev) => [...prev, ...datas.products]);
      }
    } catch (e) {
      setError(true);
    }
    console.log(product);
  }
  useEffect(() => {
    fetchproduct();
  }, [count]);
  useEffect(() => {
    if (product.length == 80) {
      setDisablebtn(true);
    }
  }, [product]);
  if (loading) {
    return (
      <div className="loading">
        <p>Please Wait Loading!</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="loading">
        <p>Error</p>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>All Products</h1>
      <div className="product-container">
        {product && product.length
          ? product.map((items) => (
              <div className="items" key={items.id}>
                <img src={items.images[0]} alt={items.title} />
                <p>{items.title}</p>
              </div>
            ))
          : null}
      </div>
      <button disabled={disablebtn} onClick={() => setCount(count + 1)}>
        Get More
      </button>
      {disablebtn ? <p>All Caught</p> : null}
    </div>
  );
}

export default Productlimit;
