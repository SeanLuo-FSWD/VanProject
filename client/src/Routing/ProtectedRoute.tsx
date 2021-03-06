import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../Store/Context/GlobalContext";

function ProtectedRoute({ children, redirectPath = "/login" }: any) {
  if (!localStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
