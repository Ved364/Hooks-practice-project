import { useState } from "react";
function Updater() {
  const [age, setAge] = useState(27);

  function handleClick() {
    setAge((age) => age + 1);
  }

  return (
    <>
      <h1 className="text-center mt-5">Age Increment using updater</h1>
      <h3>Your age: {age}</h3>
      <button
        className="counter_button"
        onClick={() => {
          handleClick();
          handleClick();
          handleClick();
        }}
      >
        +3
      </button>
      <button
        className="counter_button"
        onClick={() => {
          handleClick();
        }}
      >
        +1
      </button>
    </>
  );
}

export default Updater;
