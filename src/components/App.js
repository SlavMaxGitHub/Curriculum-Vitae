import React, { useState } from "react";

import Content from "./Content/Content";

import "./App.module.scss";

function App() {
  const [state, setState] = useState(false);

  const handleOnClick = () => {
    setState(!state);
  };

  return (
    <>
      <button onClick={handleOnClick}>{state ? "PL" : "EN"}</button>
      <Content value={state} />
    </>
  );
}

export default App;
