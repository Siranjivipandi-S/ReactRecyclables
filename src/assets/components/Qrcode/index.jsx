import React, { useState } from "react";

function QrcodeGen() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  function generatekey() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="qrcode">
      <h1>Qr Code Genearator</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Input to Create"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={generatekey}>Generate</button>
      </div>
      <div className="result">
        <Qrcode />
      </div>
    </div>
  );
}

export default QrcodeGen;
