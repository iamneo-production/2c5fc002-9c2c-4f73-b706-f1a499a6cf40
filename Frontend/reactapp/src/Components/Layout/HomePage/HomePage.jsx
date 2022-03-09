import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import AdminNavBar from "../../UI/NavBar/AdminNavBar";
import UserNavbar from "../../UI/NavBar/UserNavBar";
import { useAuthCxt } from "../../assests/auth-context";

function HomePage(props) {
  const authCxt = useAuthCxt();
  let navbar;
  if (authCxt.isAdmin) {
    navbar = <AdminNavBar />;
  } else {
    navbar = <UserNavbar />;
  }
  return (
    <Fragment>
      {navbar}
      <Outlet />
    </Fragment>
  );
}

export default HomePage;
