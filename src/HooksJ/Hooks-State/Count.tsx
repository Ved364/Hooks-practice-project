

import React, { useState } from 'react';
import '../Styles/Count.css';

 const Count: React.FC = () => {
    const [count, setCount] =useState(0);
    const Increment =() => {
        setCount(count +1)
    }
    const Decrement =() =>{
        if(count > 0){
            setCount(count -1) 
        }
        
    };
    
  return (
    <><div className='main'>
       <h1 className='header'> COUNT</h1>
       <div className='box'>
    <button onClick={Increment} className='plus'>increment </button>
    <span className='count'>{count}</span>
    <button onClick={Decrement} className='minus'>decrement</button>
    </div>
    </div></>
    
  );
};
export default Count;


