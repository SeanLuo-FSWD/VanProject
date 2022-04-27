import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Chat from "../Pages/Chat";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Member from "../Pages/Member";
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
          <Route path="chat" element={<Chat />} />
          <Route path="members" element={<Members />} />
          <Route path="member/:memberId" element={<Member />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
