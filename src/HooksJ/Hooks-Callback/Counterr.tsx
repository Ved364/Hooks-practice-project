import React, { useState, useCallback } from 'react';

const Counterr: React.FC = () => {
  const [count, setCount] = useState(0);

  
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); 

  
  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []); 
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counterr;
