import React from "react";
import TopNavBar from "./Components/NavBar/TopNavBar";
import MiddelNav from "./Components/NavBar/MiddelNav";
import BottomNav from "./Components/NavBar/BottomNav";

const Navbar = () => {
  return (
    <div>
      <div>
        <TopNavBar />
        <MiddelNav />
        <BottomNav />
      </div>
    </div>
  );
};

export default Navbar;
