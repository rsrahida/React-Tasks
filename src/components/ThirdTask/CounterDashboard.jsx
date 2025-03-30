import React, { useState } from "react";
import "./CounterDashboard.css";

const CounterDashboard = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const total = counter1 + counter2 + counter3;

  return (
    <div className="dashboard">
      <h2>Counter Dashboard</h2>
      <div className="counter">
        <h3>1.Counter: {counter1}</h3>
        <button onClick={() => setCounter1(counter1 + 1)}>+</button>
        <button onClick={() => setCounter1(counter1 - 1)}>-</button>
        <button onClick={() => setCounter1(0)}>Reset</button>
      </div>
      <div className="counter">
        <h3>2.Counter: {counter2}</h3>
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        <button onClick={() => setCounter2(counter2 - 1)}>-</button>
        <button onClick={() => setCounter2(0)}>Reset</button>
      </div>
      <div className="counter">
        <h3>3.Counter: {counter3}</h3>
        <button onClick={() => setCounter3(counter3 + 1)}>+</button>
        <button onClick={() => setCounter3(counter3 - 1)}>-</button>
        <button onClick={() => setCounter3(0)}>Reset</button>
      </div>
      <h2>Total Sum: {total}</h2>
    </div>
  );
};

export default CounterDashboard;
