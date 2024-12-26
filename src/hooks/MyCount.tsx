import { useState, useEffect } from "react";

function MyCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count ${count}`);
  }, [count]);

  function addCount() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <h1 className="text-center mt-5">Using State and Effect hook</h1>
      <p>Count: {count}</p>
      <button className="counter_button" onClick={addCount}>
        Add
      </button>
    </>
  );
}

export default MyCount;
