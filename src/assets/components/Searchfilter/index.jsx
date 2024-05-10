import React, { useState } from "react";
import { useEffect } from "react";
import Suggest from "./suggest";

function SearchForm() {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [filter, setFilter] = useState("");
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);

  async function getlister() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setUser(data.users.map((items) => items.firstName));
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      alert("Error: Could not load users!");
    }
  }
  useEffect(() => {
    getlister();
  }, []);
  function handleclick(event) {
    const q = event.target.value.toLowerCase();
    setSearchItem(q);
    if (q.length > 1) {
      const filterdata =
        user && user.length
          ? user.filter((item) => item.toLowerCase().indexOf(q) > -1)
          : null;
      setFilter(filterdata);
    }
  }
  function handlechange(event) {
    setSearchItem(event.target.innerText);
  }
  return (
    <div>
      <h1>SearchForm</h1>
      <input
        type="text"
        placeholder="Enter User"
        value={searchItem}
        onChange={handleclick}
      />
      {filter && filter.length ? (
        <Suggest user={filter} handleclick={handlechange} />
      ) : null}
    </div>
  );
}

export default SearchForm;
