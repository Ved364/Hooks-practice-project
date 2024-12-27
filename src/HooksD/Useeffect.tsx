import { useEffect } from "react";

type Props = {
  message: string;
};

const Useeffect = (props: Props) => {
  const { message } = props;
  useEffect(() => {
    console.log(`Child Component received new message: ${message}`);
  }, [message]);

  return (
    <>
      <div>{message}</div>
    </>
  );
};
export default Useeffect;
