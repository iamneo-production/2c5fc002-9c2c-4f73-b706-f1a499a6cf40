import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Login from "./LoginAndSignup/Login";
import Signup from "./LoginAndSignup/Signup";

import HomePage from "./Layout/HomePage/HomePage";
import RequireAuth from "./Layout/RequireAuth";
import ProductList from "./Layout/HomePage/ProductList";
import Cart from "./Layout/CartAndOrders/Cart";
import MyOrders from "./Layout/CartAndOrders/MyOrders";

const AllRoutes = (props) => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          index
          path="/login"
          element={<Login onLogin={props.changeIsLogged} />}
        />
        <Route path="/*" element={<HomePage onLogout={props.changeIsLogged} />}>
          <Route element={<RequireAuth role={props.isLogged} />}>
            <Route path="home" element={<ProductList />} />
            <Route path="cart/*" element={<Cart />} />
            <Route path="myorders/*" element={<MyOrders />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default AllRoutes;
