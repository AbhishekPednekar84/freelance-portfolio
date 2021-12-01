import React, { useState } from "react";
import Image from "next/image";
import { logo } from "../../utils/images";

const Navbar = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);

  return (
    <nav className="w-full p-5 flex flex-wrap items-center justify-between bg-white">
      <div className="pt-2 lg:pl-10">
        <Image src={logo} alt="Logo" width={200} height={50} />
      </div>
      <svg
        class="w-8 h-8 text-right cursor-pointer lg:hidden"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setResponsiveNav(!responsiveNav)}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h8m-8 6h16"
        ></path>
      </svg>
      <div
        className={`${
          responsiveNav
            ? "border-2 pl-6 rounded-lg shadow-md lg:border-0 lg:shadow-none lg:pl-0"
            : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <ul className="lg:flex lg:justify-between font-gilroySemiBold text-lg">
          <li className="nav-link pt-3 lg:pt-0">
            <span className="nav-link-hover-style ">Services</span>
          </li>
          <li className="nav-link">
            <span className="nav-link-hover-style">Hire Me</span>
          </li>
          <li className="nav-link">
            <span className="nav-link-hover-style">Projects</span>
          </li>
          <li className="nav-link">
            <span className="nav-link-hover-style">Blog</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
