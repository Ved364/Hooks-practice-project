import { useEffect } from "react";
type Props = {
  increment: () => void;
};

const Usecallback = (props: Props) => {
  const { increment } = props;
  useEffect(() => {
    console.log("Increment function passed or updated");
  }, []);

  return (
    <div>
      <p>Child Component</p>
      <button onClick={increment}>Increment from Child</button>
    </div>
  );
};

export default Usecallback;
