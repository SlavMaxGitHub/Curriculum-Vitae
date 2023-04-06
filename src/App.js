import React, { useState } from "react";

import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

import "./scss/style.scss";

function App() {
  const [state, setState] = useState(false);

  const handleOnClick = () => {
    setState(!state);
  };

  return (
    <>
      <button className="langBtn" onClick={handleOnClick}>
        {state ? <strong>PL</strong> : <strong>EN</strong>}
      </button>
      <Sidebar value={state} />
      <Content value={state} />
    </>
  );
}

export default App;
