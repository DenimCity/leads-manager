import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({
    loading: true,
    results: []
  })

  const fetchData = async () => {
    try {
      const results = await axios.get('/api/leads')
      console.log("TCL: fetchData -> results", results)
    } catch (error) {
    console.log("TCL: fetchData -> error", error.message)
      
    }
  }

  useEffect(() =>{
    fetchData()
  },[])
  return (
    <div className="App">
      <header className="App-header">
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
