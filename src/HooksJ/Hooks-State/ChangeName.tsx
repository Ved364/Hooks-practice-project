import React, { useState } from "react";
import '../Styles/ChangeName.css';



const ChangeName: React.FC = () => {

  const [firstName, setFirstName] = useState('jc');
  const [lastName, setLastName] = useState('R V');
  const [age] = useState(30);

  const changeFirstName = () =>{
    setFirstName("JayaChandra");
  };

 const changeLastName = () =>{
  setLastName("Reddy Vennapusa");
 };



  return (
    <div className="maindiv">;
    <div className="firstdiv">
      <h2 className="first">my first name is {firstName}  </h2>
      <button onClick={changeFirstName} className="firstbutton">change firstName</button>
      </div>
      <div className="seconddiv">
       <h2 className="second">my last name is {lastName} </h2>
       <button onClick={changeLastName} className="secondbutton">change LastName</button>
       </div>
       <h3 className="age">my age is {age} </h3>
    </div>
  );
};
export default ChangeName;
