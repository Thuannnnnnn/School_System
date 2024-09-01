import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/hello');
        setData(response.data);
        console.log(data)
      } catch (err) {
      
      } finally {
    
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
