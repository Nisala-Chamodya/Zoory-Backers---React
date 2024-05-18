import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default Main;
