import React, { useState, useEffect, useRef } from "react";


const usePreventLeave = () => {
  const listener = e => {
    e.preventDefault();
    e.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disnablePrevent = () => window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disnablePrevent };
}

function App() {
  const { enablePrevent, disnablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disnablePrevent}>Unprotect</button>
    </div>
  );
}

export default App;
