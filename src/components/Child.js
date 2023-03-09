// Child Component
import React, { useState } from "react";

function ChildComponent(props) {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    props.onDataFromChild(data);
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleChange} />
      <button onClick={handleClick}>Send data to parent</button>
    </div>
  );
}

export default ChildComponent;
