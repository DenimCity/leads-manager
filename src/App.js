import React, { useState, useEffect } from 'react';
import axios from 'axios';


import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({
    loading: true,
    results: [],
    error: false,
    errorMessages: []
  })

  const fetchData = async () => {
    try {
      const results = await axios.get('/api/leads')
      setState({loading: !state.loading, results: results.data})
    } catch (error) {
    setState({loading: !state.loading,error: true, errorMessages: [error.message]})
    }
  }

  useEffect(() =>{
    fetchData()
  },[])

  function search(array){
    return array.map((k, index) => (
          <tr key={`${k.name}-${k.id}-${index}`}>
          <td>{k.id}</td>
          <td>{k.name}</td>
          <td>{k.email}</td>
          <td>{k.created_at}</td>
          </tr>
        )
      )
  }

  return (
    <div className="App">
   <table style={{width:"60%"}}>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Created</th>
  </tr>
  
   {search(state.results)}
   
 
</table>

    </div>
  );
}

export default App;
