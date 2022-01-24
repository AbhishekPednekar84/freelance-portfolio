import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../utils/images";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import returnGreeting from "../../utils/greeting";

const variants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    delay: 0.5,
    duration: 2,
    ease: "easeIn",
    type: "tween",
  },
};

const Navbar = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollOn = window.scrollY > 0;

    if (scrollOn) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }

    const closeMenuOnScroll = window.scrollY > 600;

    if (closeMenuOnScroll) {
      setResponsiveNav(false);
    }
  };

  const handleAbout = () => {
    Swal.fire({
      title: returnGreeting(),
      html: "<div class='text-left'>I am Abhishek Pednekar, a web developer from Bengaluru. With over 15 years of experience in the industry, I have worn numerous hats across multiple domains.<br /><br /> A couple of years ago, I gave the corporate environment a break to start working as a full-time freelancer to rekindle my passion for learning and creating. Attention to detail is my greatest strength which bodes well when creating modern, aesthetically pleasing and customer-friendly websites.<br /><br /> I am always looking for new challenges. So hit me up if you are looking for a website or if you want to discuss kick-starting your online presence or have any questions about learning web development.</div>",
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor: "#DB2777",
      cancelButtonText: "CLOSE",
    });
  };

  return (
    <nav
      className={`w-full p-5 flex items-center justify-between bg-white relative lg:fixed top-0 left-0 z-50 ${
        stickyNav ? "lg:shadow-xl lg:opacity-95" : "shadow-none"
      }`}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="pt-2 lg:pl-10"
      >
        <Image src={logo} alt="Logo" width={200} height={50} />
      </motion.div>
      {!responsiveNav ? (
        <svg
          class="w-8 h-8 text-right cursor-pointer lg:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setResponsiveNav(!responsiveNav)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          ></path>
        </svg>
      ) : (
        <svg
          class="w-8 h-8 text-right cursor-pointer lg:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setResponsiveNav(!responsiveNav)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      )}

      <div
        className={`${
          responsiveNav
            ? "absolute top-full right-2 md:right-4 w-96 lg:right-0 lg:top-1/3 bg-white border-2 border-blue-200 rounded-lg shadow-lg lg:border-0 lg:shadow-none lg:pl-0 overflow-x-hidden"
            : "hidden"
        } w-full lg:flex lg:items-center lg:w-2/3`}
      >
        <ul className="lg:flex lg:justify-between font-gilroySemiBold text-lg px-6 lg:px-0 py-2 lg:py-0">
          <li className="nav-link pt-3 lg:pt-0 pb-0">
            <Link href="#">
              <a
                onClick={() => {
                  handleAbout();
                  setResponsiveNav(false);
                }}
              >
                <span className="nav-link-hover-style ">Me</span>
              </a>
            </Link>
          </li>
          <li className="nav-link pt-3 lg:pt-0">
            <Link href="#services">
              <a>
                <span className="nav-link-hover-style ">Services</span>
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#projects">
              <a>
                <span className="nav-link-hover-style">Projects</span>
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#contact">
              <a>
                <span className="nav-link-hover-style">Hire Me</span>
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="https://codedisciples.in" passHref={true}>
              <a target="__blank" rel="noopener noreferrer">
                <span className="nav-link-hover-style">Blog</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
