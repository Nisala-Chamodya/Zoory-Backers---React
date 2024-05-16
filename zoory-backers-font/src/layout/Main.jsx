import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav>nav bar</nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default Main;
