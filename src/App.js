
import './App.css';
import React from 'react';
import Login from './components/Login';
import{BrowserRouter as Router,Route,Routes } from 'react-router-dom';
  


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;