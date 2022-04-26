import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Members from "../Pages/Members";
import PreLoginRoute from "./PreLoginRoute";
import ProtectedRoute from "./ProtectedRoute";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PreLoginRoute />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          element={
            <>
              <Navbar />
              <ProtectedRoute />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
