import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/market-data`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Indian Finance Predictor</h1>
      <p>Welcome to the dashboard.</p>
    </div>
  );
}

export default App;
