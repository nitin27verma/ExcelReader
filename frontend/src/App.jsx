import React, { useState } from 'react';

function App() {
  const [columns, setColumns] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`/read-columns?columns=${columns}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Excel Data Viewer</h1>
      <input
        type="text"
        value={columns}
        onChange={(e) => setColumns(e.target.value)}
        placeholder="Enter column names (e.g., Name,Age)"
      />
      <button onClick={fetchData}>Fetch Data</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
