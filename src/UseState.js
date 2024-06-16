import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };


  const [name, setName] = useState("");

  const [viewedName, setViewedName] = useState("");

  const viewName = () => {
    setViewedName(name);
  };

  const handleNameChange = (e) => {
    setName(e.target.value); //update the name state with the input value
  };

const resetName = () => {
    setName("");
    viewName("")
    window.location.reload();
  };
  return (
    <div className="flex gap-2">
       
    <div className="p-8 bg-gray-300 w-[240px]">
      <h1 className="text-9xl"> {count}</h1>

      <button onClick={incrementCount} className="bg-blue-400 rounded-md">
        Click to increment
      </button>
      <br></br>

      <button onClick={decrementCount} className=" mt-2 bg-red-400 rounded-md ">
        Click to decrement
      </button>
      <br></br>

      <button
        onClick={resetCount}
        className=" mt-2 bg-yellow-400 rounded-xl w-20"
      >
        Reset
      </button>
    </div>

    <div className="bg-pink-200  p-8 w-1/3">
      <label className="font-bold">Enter your name:</label>
      <input
    
        onChange={handleNameChange}
        className="font-bold rounded-xl"
        type="text"
      ></input>
      <br></br>

      <button
        type="text"
        onClick={viewName}
        className="bg-purple-300 font-bold ml-2 rounded-xl w-1/3 mt-4"
      >
       View Name
      </button>

      <button
        type="text"
        onClick={resetName}
        className="bg-purple-300 font-bold ml-2 rounded-xl w-1/3 mt-4"
      >
        Reset
      </button>


{/*Display the viewed name only when it's set */} 
{/* Conditional Rendering only rendered when the state has some value */}
      {viewedName && (
        <div className="mt-4">
            <label className="font-bold">Your Name:</label>
            <p>{viewedName}</p>
        </div>
      )}
    </div>


     </div>
  );
}
export default UseState;
