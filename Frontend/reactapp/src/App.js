import './App.css';
import React from "react";
//For routing purpose
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './Components/Login.jsx';
import Signup from "./Components/Signup";

import HomePage from './Components/Layout/HomePage/HomePage';
import ProductList from './Components/Layout/HomePage/ProductList';
import Cart from './Components/Layout/CartAndOrders/Cart';
import MyOrders from './Components/Layout/CartAndOrders/MyOrders';


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route index path="/login" element={<Login/>}/>
          <Route path="/" exact element={<HomePage/>}>
              <Route index  element={<ProductList/>} />
              <Route path='/cart' exact element={<Cart/>} />
              <Route path='/myorders' exact element={<MyOrders/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
