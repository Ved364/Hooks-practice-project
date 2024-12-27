type Props = {
  changePlace: () => void;
  label: string;
};

const Usestate = (props: Props) => {
  const { changePlace, label } = props;
  return <button onClick={changePlace}>{label}</button>;
};

export default Usestate;
