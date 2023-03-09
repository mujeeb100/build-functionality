import React, { useState } from "react";
import Header from "./components/Header";
// import ParentComponent from "./components/parent";
import ChildComponent from "./components/Child";
// import GameMgr from "./components/GameMgr";
function App1(props) {
  const [input, setInputValue] = useState();

  //   const data = "Mohammad";
  function getData(data) {
    // console.log(setInputValue);
    setInputValue(data);
  }
  return (
    <>
      {/* components are reusable */}
      <Header name="Zaki ansari" />
      <Header name="Mujju7886" />
      <Header name="Mr Mujeeb" />
      {/* child components */}
      <ChildComponent getData={getData} />
      <div>{input}</div>
    </>
  );
}

export default App1;
