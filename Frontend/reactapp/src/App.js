import './App.css';
import React from "react";
import Login from './Components/Login/Login';
import HomePage from './Components/Layout/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/HomePage' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
