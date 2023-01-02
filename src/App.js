import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function counter1(){
    if(count===10)
    return 10;
    setCount(count+1);
  }
  function counter2(){
    if(count===0)
    return 0;
    setCount(count-1);
  }
  return (
    <div className="App">
      <h1>value of count is {count}</h1>
      <button onClick={counter1}>increment type1</button>
      <button onClick={counter2}>decrement type1</button>
      <button onClick={() => setCount(count + 1)}>increment type 2</button>
      <button onClick={() => setCount(0)}>clear</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
}

export default App;
