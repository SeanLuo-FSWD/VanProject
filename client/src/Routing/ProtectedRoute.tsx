import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../Store/Context/GlobalContext";

function ProtectedRoute({ children, redirectPath = "/login" }: any) {
  // Get the localstorage, if exist, then good (as verify only server side via calls), and THEN set the currentUser for display purpose only.

  if (!localStorage.getItem("user")) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
    return <Navigate to={redirectPath} replace />;
  }

  console.log("bbbbbbbbbbbbbbbbbb");

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
