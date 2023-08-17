import './App.css';
import React,{useState} from 'react'

function App() {
  const [count,setCount]=useState(0)
  function increase(){
    setCount(count+1)
  }
  function decrease(){
    setCount(count-1)
  }
  return (
    <div className="App">
      {count}
     <button onClick={increase}>+</button>
     <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
