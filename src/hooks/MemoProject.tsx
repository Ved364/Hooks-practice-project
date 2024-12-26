/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";

const MemoProject = () => {
  const [, setText] = useState("");
  const [number, setNumber] = useState(1);
  const expensiveFunction = (n: any) => {
    console.log("Function re-rendered");
    let total = 1000000000000;
    for (let i = 0; i < n; i++) {
      total += i;
    }
    return total;
  };

  const sum = useMemo(() => expensiveFunction(number), [number]);

  return (
    <div className="mb-5">
      <h1 className="text-center mt-5">
        Total Increment with useState and useMemo
      </h1>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
      />
      <button className="counter_button" onClick={() => setNumber(number + 1)}>
        Count
      </button>
      <span>Total: {sum}</span>
    </div>
  );
};

export default MemoProject;
