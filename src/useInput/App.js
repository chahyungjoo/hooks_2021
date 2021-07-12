import React, { useState } from "react";
export { useInput as default } from "./useInput";


const useInput = (initialValue, vaildator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    const {
      target : { value }
    } = e;

    let willUpdate = true;

    if(typeof vaildator === "function"){
      willUpdate = vaildator(value);
    }

    if(willUpdate){
      setValue(value);
    }
  };
  
  return { value, onChange };
}

function App() {
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
}

export default App;
