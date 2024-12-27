import ButtonIncrement from "./hooks/ButtonIncrement";
import Counter from "./hooks/Counter";
import FormObj from "./hooks/FormObj";
import MemoProject from "./hooks/MemoProject";
import MyCount from "./hooks/MyCount";
import Updater from "./hooks/Updater";
import Usestate from "./HooksD/Usestate";
import Useeffect from "./HooksD/Useeffect";
import Usecallback from "./HooksD/Usecallback";
import Usememo from "./HooksD/Usememo";
import { useState, useCallback } from "react";

function App() {
  const [place, setPlace] = useState("(Select)");
  const [message, setMessage] = useState("Hello World");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(1);

  const Tasks = [
    {
      message: "Place set to Hyderabad",
      label: "Hyderabad",
      toPlace: () => {
        setPlace("Hyderabad");
        console.log("Place set to Hyderabad");
      },
    },
    {
      message: "Place set to Banglore",
      label: "Banglore",
      toPlace: () => {
        setPlace("Banglore");
        console.log("Place set to Banglore");
      },
    },
    {
      message: "Place set to Mumbai",
      label: "Mumbai",
      toPlace: () => {
        setPlace("Mumbai");
        console.log("Place set to Mumbai");
      },
    },
    {
      message: "Place set to Pune",
      label: "Pune",
      toPlace: () => {
        setPlace("Pune");
        console.log("Place set to Pune");
      },
    },
    {
      message: "Place set to Kolkata",
      label: "Kolkata",
      toPlace: () => {
        setPlace("Kolkata");
        console.log("Place set to Kolkata");
      },
    },
    {
      message: "Reset",
      label: "Reset",
      toPlace: () => {
        setPlace("(select)");
        console.log("Place Reset");
      },
    },
  ];

  const handleChangeMessage = () => {
    setMessage("Message updated!");
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  const incrementCount = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  const incrementNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  return (
    <>
      <Counter />

      <MyCount />

      <Updater />

      <FormObj />

      <ButtonIncrement />

      <MemoProject />

      <h2>I prefer to choose {place} to work...</h2>

      {Tasks.map((tasks) => {
        <Usestate
          key={tasks.label}
          changePlace={tasks.toPlace}
          label={tasks.message}
        />;
      })}
      <br />
      <hr />
      <h1>React TypeScript UseEffect</h1>
      <p>Counter: {count}</p>
      <button onClick={handleChangeMessage}>Change Message</button>
      <button onClick={increment}>+1</button>
      <Useeffect message={message} />
      <hr />

      <h1>React TypeScript useCallback Example</h1>
      <p>Value: {value}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <Usecallback increment={incrementCount} />

      <h1>useMemo Hook Example</h1>
      <p>Current Number: {number}</p>
      <button onClick={incrementNumber}>Increment Number</button>

      <Usememo num={number} />
    </>
  );
}

export default App;
