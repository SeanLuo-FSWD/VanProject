import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../Store/Context/GlobalContext";

function PreLoginRoute({ children, redirectPath = "/" }: any) {
  if (localStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}

export default PreLoginRoute;
