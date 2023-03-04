import axios from "axios";
import { useState } from "react";
import "./App.css";
// import { useNavigate } from "react-router-dom";

function App() {
  const [inputValue, setInput] = useState("");
  console.log(inputValue);

  async function loginNavigate() {
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
    if (response && response.userId) {
      await this.$store.dispatch("auth/setUserId", {
        userId: response.userId,
        mobile: inputValue,
      });
      this.$router.push({ path: "/src/verify" });
    }
    console.log(response);
  }

  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/src/verify.js`;
  //   navigate(path);
  // };
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
      <button onClick={loginNavigate}>Proceed</button>
    </div>
  );
}

export default App;
