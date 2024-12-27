import { useMemo } from "react";

type Props = {
  num: number;
};

const Usememo = (props: Props) => {
  const { num } = props;
  const squaredNumber = useMemo(() => {
    console.log("Computing square of the number...");
    return num * num;
  }, [num]);

  return (
    <div>
      <h2>Child Component</h2>
      <p>
        The square of {num} is {squaredNumber}
      </p>
    </div>
  );
};

export default Usememo;
