import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <MainRoutes />
    </AuthContextProvider>
  );
};

export default App;
