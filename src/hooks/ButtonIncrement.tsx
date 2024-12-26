import { useState } from "react";

function ButtonIncrement() {
  const [count, setCount] = useState(0);

  function handleClick() {
    if (count < 3) {
      setCount(count + 1);
    } else {
      console.log(`You have pressedd me ${count} times, Stop pressing`);
      setCount(0);
    }
  }

  return (
    <>
      <h1 className="text-center mt-5">Button Increment</h1>
      <button className="counter_button" onClick={handleClick}>
        You pressed me {count} times
      </button>
    </>
  );
}

export default ButtonIncrement;
