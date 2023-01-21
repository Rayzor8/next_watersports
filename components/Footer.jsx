import React from "react";
import navLogo from "../public/images/logo.jpg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="container px-5 py-4 mx-auto flex items-center justify-center shadow-lg">
      <div className="flex gap-2 items-center justify-center">
        <p className="font-black text-midBlue">
          @Rayzor{" "}
          <span className=" text-sm font-normal underline decoration-wavy decoration-sky-400 italic">
            Watersport
          </span>
        </p>
      </div>
      <p className="text-sm text-midBlue sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2022
      </p>
    </footer>
  );
};

export default Footer;
