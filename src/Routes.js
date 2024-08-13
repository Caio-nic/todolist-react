import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Login from "./pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  );
}

export default AppRoutes;
