import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInput] = useState("");
  console.log(inputValue);

  // useEffect(() => {
  async function validateGst() {
    const response = await axios.post(
      "https://pisoauat.niyogin.in/gates/1.0/sweeps/validateGSTin",
      {
        gstin: inputValue,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: "xSgqh",
          password: "GKPejXE}c",
        },
      }
    );
    console.log(response);
  }

  // validateGst();
  // }, []);
  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={validateGst}>Gst Validate</button>
    </div>
  );
}

export default App;
