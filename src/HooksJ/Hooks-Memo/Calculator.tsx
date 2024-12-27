import React, { useMemo, useState } from 'react';

const Calculator: React.FC = () => {
  const [number, setNumber] = useState(1);

  const factorial = (n: number): number => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const memoizedFactorial = useMemo(() => {
    console.log('Calculating factorial...');
    return factorial(number);
  }, [number]); 

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        min="0"
      />
      <p>Factorial of {number} is {memoizedFactorial}</p>
    </div>
  );
};

export default Calculator;

