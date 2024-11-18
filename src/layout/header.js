import React from "react";
import Navbar from "../components/navbar";
import Hero from "../assets/img/Header.png";

const Header = () => {
  return (
    <div>
      <Navbar />
      <img className="container" src={Hero} alt="pict" />
      <h1 className="absolute text-center">ini hero</h1>
    </div>
  );
};

export default Header;
