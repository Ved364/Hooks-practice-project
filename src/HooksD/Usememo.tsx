import { useMemo } from "react";

type Props3 = {
  num: number;
};

const Usememo = (props: Props3) => {
  const squaredNumber = useMemo(() => {
    console.log("Computing square of the number...");
    return props.num * props.num;
  }, [props.num]);

  return (
    <div>
      <h2>Child Component</h2>
      <p>
        The square of {props.num} is {squaredNumber}
      </p>
    </div>
  );
};

export default Usememo;
