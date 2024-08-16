import React from "react";
import Navigation from "./components/Navigation";
import AppRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          {/* <Navigation /> */}
          <AppRoutes />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
