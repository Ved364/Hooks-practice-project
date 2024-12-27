import React, { useState, useCallback } from 'react';

const ListManager: React.FC = () => {
  const [items, setItems] = useState<string[]>([]); 
  const [input, setInput] = useState(''); 

  
  const addItem = useCallback(() => {
    if (input.trim()) {
      setItems((prevItems) => [...prevItems, input]);
      setInput(''); 
    }
  }, [input]); 

  
  const clearList = useCallback(() => {
    setItems([]); 
  }, []); 

  return (
    <div>
      <h1>List Manager</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={clearList}>Clear List</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
};

export default ListManager;
