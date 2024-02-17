import { useState } from "react";
import './App.css'

export default function() {
  const [inputVal, setInputVal] = useState('');
  const [list,setList] = useState([]);

  
  const handleChange = (event) => {
    setInputVal(event.target.value);
  };
     
  function handleClick() {
    if(inputVal === '') return;
    setList([...list, {value:inputVal, completed: false}]);
    setInputVal('');
  };

  const remove = (index) => {
    setList((list) => {
      return list.slice(0, index) + list.slice(index + 1, list.length);
    })
  }

  const toggleComplete = (index) => {
    setList((list) => {
      const newList = [...list];
      newList[index] = {...newList[index], completed: !newList[index].completed}
      return newList;
    })
  }

  const ClearAll = () => {
    setList([]);
  }

  return (
    <div>
      <h1>hello</h1>
      <input type="text" placeholder="enter text" value={inputVal} onChange={handleChange}></input>
      <button onClick={handleClick}>Submit</button>
      {list.map((item, index) => (
        <div key={index} className="task-container">
          <p className={item.completed ? 'completed' : ''}>{item.value}</p>
          <button onClick={() => remove(index)}>Remove</button>
          <button onClick={() => toggleComplete(index)}>Complete</button>
        </div>
      ))}
      <button onClick={ClearAll}>Clear All</button>
    </div>
  );
}
