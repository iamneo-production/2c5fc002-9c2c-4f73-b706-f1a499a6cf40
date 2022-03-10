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

import AdminProducts from "./Admin/AdminProducts";
import { useAuthCxt } from "./assests/auth-context";
import DisplayUser from "./Layout/ViewUsers/DisplayUser";

const AllRoutes = (props) => {
  const authCxt = useAuthCxt();
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route index path="/login" element={<Login />} />
        <Route path="/*" element={<HomePage />}>
          <Route element={<RequireAuth role={authCxt.isLogged} />}>
            <Route path="home" element={<ProductList />} />
            <Route path="cart/*" element={<Cart />} />
            <Route path="myorders/*" element={<MyOrders />} />
          </Route>
          <Route element={<RequireAuth role={authCxt.isAdmin} />}>
            <Route path="addProduct" element={<AdminProducts />} />
            <Route path="admin/users-list/*" element={<DisplayUser />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default AllRoutes;
