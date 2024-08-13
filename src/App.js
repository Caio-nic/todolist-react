import React from "react";
import Navigation from "./components/Navigation";
import AppRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Router>
        {/* <Navigation /> */}
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
