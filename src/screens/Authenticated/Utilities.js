import React, { useState, useMemo } from "react";
import Navbar from "../../routes/AuthenticatedLayout/Navbar";
import QRCode from "react-qr-code";

function Utilities() {
  // example of useMemo
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  // const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  // useMemo memorize the function & it notes into the cache & will rerender only when the variable/dependancy changes

  return (
    <div>
      <Navbar />
      <p>utils</p>
      <div>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>

      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          // value={value}
          value="hi"
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}

export default Utilities;
