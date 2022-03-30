import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  let content;

  if (
    (props.role === "admin" && props.isLogged) ||
    (props.role === "customer" && props.isLogged)
  ) {
    content = <Outlet />;
  } else {
    content = <Navigate to="/login" />;
  }

  return content;
};

export default RequireAuth;
