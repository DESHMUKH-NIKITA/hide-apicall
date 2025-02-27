import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make a request to the proxy server
    axios.get('http://localhost:8000/api/import-ledger')
      .then(response => {
        console.log('Response from proxy:', response.data); // Log the data
        setData(response.data); // Update state with data from the proxy
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataComponent;
