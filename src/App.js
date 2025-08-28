import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main>
      <Outlet />
      <ToastContainer />
    </main>
  );
};

export default App;
