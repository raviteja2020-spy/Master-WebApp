import React from "react";
import Navbar from "../Navbar/Navbar";
import { NavLinks } from "./HomeMenuItems";

function Home() {
  return (
    <div>
      <Navbar menuItems={NavLinks} />
    </div>
  );
}

export default Home;
