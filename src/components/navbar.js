import React from "react";
import Buttonmenu from "../components/button-menu";
import Logomenu from "../assets/img/logo-removebg.png";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 bg-[#191919] gap-x-7">
      <div className="flex flex-row">
        <img
          src={Logomenu}
          alt="Logo"
          width={"116px"}
          height={"116px"}
          className="my-2.5"
        />
        <h1 className="absolute my-[40px] ms-[80px] text-white text-[40px] font-bold font-Montserrat me-10">
          ART DU <span className="text-[#D5BE78]">BOUCHER</span>
        </h1>
      </div>

      <ul className="absulute ms-64 flex flex-row text-white my-[45px] font-Montserrat font-semibold items-center text-center leading-5">
        <li className="p-4">ACCUEIL</li>
        <li className="p-4">A PROPOS DE NOUS</li>
        <li className="p-4">NOS SERVICES</li>
        <li className="p-4">CONTACT</li>
      </ul>

      <div>
        <Buttonmenu />
      </div>
    </nav>
  );
};

export default Navbar;
