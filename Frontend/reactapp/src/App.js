import './App.css';
import React from "react";
//For routing purpose
import { Routes , Route , Navigate} from 'react-router-dom'

import Login from './Components/Login.jsx';
import Signup from "./Components/Signup";

import HomePage from './Components/Layout/HomePage/HomePage';
import ProductList from './Components/Layout/HomePage/ProductList'
import Cart from './Components/Layout/CartAndOrders/Cart';
import MyOrders from './Components/Layout/CartAndOrders/MyOrders';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route index path="/login" element={<Login/>}/>
          <Route path="/*" element={<HomePage/>}>
            <Route path='home'  element={<ProductList/>} />
            <Route path='cart' element={<Cart/>} />
            <Route path='myorders' element={<MyOrders/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
