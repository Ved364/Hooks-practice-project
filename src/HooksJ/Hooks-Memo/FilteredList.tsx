import React, { useMemo, useState } from 'react';

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
];

const FilteredList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); 

  return (
    <div>
      <h1>Filtered List</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
