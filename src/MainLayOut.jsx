import React from "react";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <Outlet />
    </div>
  );
};

export default MainLayOut;
