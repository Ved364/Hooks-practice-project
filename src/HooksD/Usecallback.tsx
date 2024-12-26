import { useEffect } from "react";
type Props2 = {
  increment: () => void;
};

const Usecallback = (props: Props2) => {
  useEffect(() => {
    console.log("Increment function passed or updated");
  }, []);

  return (
    <div>
      <p>Child Component</p>
      <button onClick={props.increment}>Increment from Child</button>
    </div>
  );
};

export default Usecallback;
