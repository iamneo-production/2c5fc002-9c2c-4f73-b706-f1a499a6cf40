import "./App.css";
import React, { useState } from "react";
//For routing purpose
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup";

import RequireAuth from "./Components/Layout/RquireAuth";

import HomePage from "./Components/Layout/HomePage/HomePage";
import ProductList from "./Components/Layout/HomePage/ProductList";
import Cart from "./Components/Layout/CartAndOrders/Cart";
import MyOrders from "./Components/Layout/CartAndOrders/MyOrders";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route index path="/login" element={<Login onLogin={setIsLogged} />} />
        <Route path="/*" element={<HomePage onLogout={setIsLogged} />}>
          <Route element={<RequireAuth role={isLogged} />}>
            <Route path="home" element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="myorders" element={<MyOrders />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
