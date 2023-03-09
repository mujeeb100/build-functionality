import axios from "axios";
import { useState } from "react";
import "./App.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function App() {
  const [inputValue, setInput] = useState("");
  const [inputCancelValue, setInputCancelValue] = useState("");
  console.log(inputValue);
  console.log(inputCancelValue);

  async function loginNavigate(e) {
    if (e.keyCode === 13) {
      loginNavigate();
    }
    const response = await axios.post(
      "https://pisoauat.niyogin.in/gates/1.0/sweeps/fetchUserFromMobile",
      {
        auth: "xSgqh_GKPejXE}c",
        mobile: inputValue,
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

  async function handleCancelCheque() {
    const res = await axios.post(
      "https://pisoauat.niyogin.in/gates/1.0/sweeps/uploadDoc",
      {
        image: inputCancelValue,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        auth: {
          username: "xSgqh",
          password: "GKPejXE}c",
        },
      }
    );
    console.log(res);
    // extract cheque from cheuque
    const resC = await axios.post(
      "https://pisoauat.niyogin.in/gates/1.0/sweeps/extractCheque",
      {
        image: inputCancelValue,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        auth: {
          username: "NwdW2",
          password: "BJYR4z1TW",
        },
      }
    );
    console.log(res);
  }

  return (
    <div className="App">
      login Page
      <label for="quantity">Quantity (between 1 and 5):</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="10"
        value={inputValue}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* <Link o="/src/verify"></Link> */}
      <button onClick={loginNavigate} type="submit">
        Proceed
      </button>
      {/* OCR of cancel cheque start */}
      <input
        type="file"
        id="CANCHQ"
        name="filename"
        // onChange={handleCancelCheque}
        value={inputCancelValue}
        onChange={(e) => setInputCancelValue(e.target.value)}
      />
      {/* OCR of cancel cheque end*/}
    </div>
  );
}

export default App;
