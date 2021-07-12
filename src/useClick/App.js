import React, { useState, useEffect, useRef } from "react";
export { useClick as default } from "./useClick";


const useClick = functionName => {
  /*if(typeof functionName !== "function"){
    return;
  }*/
  const element = useRef();
  
  useEffect( () => {
    if(element.current){
      element.current.addEventListener("click", functionName);
    }
    
    return () => {
      if(element.current){
        element.current.removeEventListener("click", functionName);
      }
    };

  }, []);

  return element;
}

function App() {
  const sayHello = () => console.log("Hello!!");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi~</h1>
    </div>
  );
}

export default App;
