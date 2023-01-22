import React from "react";
import Image from "next/image";
import navLogo from "../public/images/logo.jpg";

const Header = () => {
  return (
    <header className="shadow-xl sticky top-0 z-50 bg-white ">
      <nav className=" px-4 py-2 flex flex-wrap items-center gap-2  md:gap-10">
        <div className="flex gap-2 items-center">
          <Image src={navLogo} alt="navbar-logo" width={80} />
          <h1 className="text-2xl md:text-4xl font-black text-midBlue">
            Rayzor{" "}
            <span className=" text-sm font-normal underline decoration-wavy decoration-sky-400 italic">
              Watersport
            </span>
          </h1>
        </div>

        <ul className="flex gap-2  md:text-lg text-midBlue font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
