import React from "react";

export default function App() {

    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }





    return (
      <div className="container">
        <h1>{count}</h1>
        <button onClick={add}>Increment</button>
        <button onClick={subtract}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
}
