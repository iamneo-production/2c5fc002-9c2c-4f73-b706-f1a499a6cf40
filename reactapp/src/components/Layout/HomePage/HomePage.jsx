import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import AdminNavBar from "../../UI/NavBar/AdminNavBar";
import UserNavbar from "../../UI/NavBar/UserNavBar";
import { useAuthCxt } from "../../assests/auth-context";

function HomePage() {
  const authCxt = useAuthCxt();
  const { userInfo, isLogged } = authCxt;
  let navbar;
  if (isLogged && userInfo.userType === "admin") {
    navbar = <AdminNavBar />;
  } else if (isLogged && userInfo.userType === "customer") {
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
