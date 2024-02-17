import { useState } from "react";

export default function() {
  const [inputVal, setInputVal] = useState('');

  
  const handleChange = (event) => {
    setInputVal(event.target.value);
  };
     
  function handleClick() {
    setInputVal(inputVal);
    console.log(setInputVal);
  };
        return (
    <div>
      <h1>hello</h1>
      {/* Corrected function name in onChange prop */}
      <input type="text" placeholder="enter text" value={inputVal} onChange={handleChange}></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
