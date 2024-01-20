import "./App.css";
import { useState } from "react";

function App() {

  const[count,setCount]=useState(0)

  function decreaseHandler(){
    if(count>0)
      setCount(count-1)
  }
  function increaseHandler(){
    setCount(count+1)
  }
  function resetHandler(){
    setCount(0)
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#311a67] flex-col gap-10">
      <div className="text-[beige] text-2xl">Increment && Decrement</div>
      <div className="text-[#000000] flex gap-12 bg-white justify-center py-3  rounded text-[25px]">
        <button onClick={decreaseHandler} className="border-r-2 text-center border-[#0000004f] w-20 text-5xl">
          -
        </button>
        <div className="font-bold text-5xl">
          {count}
        </div>
        <button onClick={increaseHandler} className="border-l-2 text-center border-[#0000004f] w-20 text-5xl"> 
          +
        </button>
      </div>
      <button onClick={resetHandler} className="text-[beige] text-2xl bg-[#673aba] px-2 py-2">
        Reset
      </button>
      
    </div>
    
  );
}

export default App;
