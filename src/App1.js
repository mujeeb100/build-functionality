import React from "react";
import Header from "./components/Header";
// import ParentComponent from "./components/parent";
import ChildComponent from "./components/Child";
// import GameMgr from "./components/GameMgr";

function App1(props) {
  //   const data = "Mohammad";
  function getData(data) {
    console.log(data);
  }
  return (
    <>
      {/* components are reusable */}
      <Header name="Zaki ansari" />
      <Header name="Mujju7886" />
      <Header name="Mr Mujeeb" />
      {/* child components */}
      <ChildComponent getData={getData} />
    </>
  );
}

export default App1;
