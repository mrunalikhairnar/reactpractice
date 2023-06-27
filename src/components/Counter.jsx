import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <button onClick={countDecrement}>-</button>
      <span>{count}</span>
      <button onClick={countIncrement}>+</button>
    </>
  );
};

export default Counter;
