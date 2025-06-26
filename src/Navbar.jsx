import React from "react";
import TopNavBar from "./Components/NavBar/TopNavBar";
import MiddelNav from "./Components/NavBar/MiddelNav";
import BottomNav from "./Components/NavBar/BottomNav";
import NavTest from "./Components/NavBar/NavTest";

const Navbar = () => {
  return (
    <div>
      <div>
        <TopNavBar />
        <MiddelNav />
        {/* <NavTest /> */}
        <BottomNav />
      </div>
    </div>
  );
};

export default Navbar;
