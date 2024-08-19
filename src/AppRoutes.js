import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={isAuthenticated ? <Home /> : <Navigate to="/" />}
      />
      {/* <Route
        path="/edit"
        element={isAuthenticated ? <Edit /> : <Navigate to="/" />}
      /> */}
      <Route
        path="/todo"
        element={isAuthenticated ? <Home /> : <Navigate to="/" />}
      />
      <Route
        path="/working"
        element={isAuthenticated ? <Home /> : <Navigate to="/" />}
      />
      <Route
        path="/done"
        element={isAuthenticated ? <Home /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
