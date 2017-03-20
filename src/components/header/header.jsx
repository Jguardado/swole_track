import React from "react";
import SignIn from "../signin/signin";
import NavBar from "../nav-bar/nav-bar";

const Header = () => {
  return (
    <div className="header"> 
      <NavBar />
      <SignIn />
    </div>
  )
};

export default Header;
