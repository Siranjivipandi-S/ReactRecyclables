import React, { useState } from "react";

function GitHubAcc() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div className="">Retry</div>;
  }
  async function getdata() {
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>GitHub Account</h1>
      <span title="Enter Name">Name</span>
      <div className="gitcontainer">
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUser(e)}
        />
        <button onClick={getdata}>Check User!</button>
      </div>
    </div>
  );
}

export default GitHubAcc;
