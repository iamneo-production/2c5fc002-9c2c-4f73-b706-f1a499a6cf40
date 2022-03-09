import React, { Fragment } from "react";

import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useAuthCxt } from "../../assests/auth-context";

const AdminNavBar = (props) => {
  const authCxt = useAuthCxt();
  const logoutHandler = () => {
    authCxt.changeAdminHandler(false);
  };
  return (
    <Fragment>
      <nav className={classes.header} id="adminNavbar">
        <h1 className={classes.title}>AmazePack</h1>
        <div className={classes.navlinks}>
          <ul>
            <NavLink
              to="/addProduct"
              className={(navData) => {
                return navData.isActive ? classes.active : undefined;
              }}
            >
              <li id="adminProductButton">Products</li>
            </NavLink>
            <NavLink
              to="/admin/orders"
              className={(navData) => {
                return navData.isActive ? classes.active : undefined;
              }}
            >
              <li id="adminOrdersButton">Orders</li>
            </NavLink>
            <NavLink
              to="/admin/users-list"
              className={(navData) => {
                return navData.isActive ? classes.active : undefined;
              }}
            >
              <li id="adminViewUsersButton">View Users</li>
            </NavLink>
          </ul>
        </div>
        <button
          id="admin-logout"
          className={classes.logout}
          onClick={logoutHandler}
        >
          Logout
        </button>
      </nav>
    </Fragment>
  );
};

export default AdminNavBar;
