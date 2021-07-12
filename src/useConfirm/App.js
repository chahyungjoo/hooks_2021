import React, { useState, useEffect, useRef } from "react";
export { useConfirm as default } from "./useConfirm";


function App() {
  const deleteWorld = () => console.log("Deleting...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>DELETE BUTTON</button>
    </div>
  );
}

export default App;
