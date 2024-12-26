import { useEffect } from "react";

type Props1 = {
  message: string;
};

const Useeffect = (props: Props1) => {
  useEffect(() => {
    console.log(`Child Component received new message: ${props.message}`);
  }, [props.message]);

  return (
    <>
      <div>{props.message}</div>
    </>
  );
};
export default Useeffect;
