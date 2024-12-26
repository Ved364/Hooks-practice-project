type Props = {
  setPlace: () => void;
  label: string;
};

const Usestate = (props: Props) => {
  return <button onClick={props.setPlace}>{props.label}</button>;
};

export default Usestate;
