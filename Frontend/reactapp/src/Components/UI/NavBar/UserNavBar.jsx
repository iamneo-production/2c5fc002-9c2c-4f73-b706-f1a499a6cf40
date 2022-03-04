import React, { Fragment } from "react";

import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const UserNavBar = (props) => {
  return (
    <Fragment>
      <nav className={classes.header} id={props.id}>
        <h1 className={classes.title}>AmazePack</h1>
        <div className={classes.navlinks}>
          <ul>
            <NavLink
              to="home"
              className={(navData) => navData.isActive && classes.active}
            >
              <li id="productHomeButton">Home</li>
            </NavLink>
            <NavLink
              to="cart"
              className={(navData) => navData.isActive && classes.active}
            >
              <li id="productCartButton">Cart</li>
            </NavLink>
            <NavLink
              to="myorders"
              className={(navData) => navData.isActive && classes.active}
            >
              <li id="productOrdersButton">My Orders</li>
            </NavLink>
          </ul>
        </div>
        <button
          id="logout"
          className={classes.logout}
          onClick={() => {
            props.onLogout(false);
          }}
        >
          Logout
        </button>
      </nav>
    </Fragment>
  );
};

export default UserNavBar;
