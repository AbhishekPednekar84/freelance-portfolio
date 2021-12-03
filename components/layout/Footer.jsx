import React from "react";
import Link from "next/link";
import Image from "next/image";
import { linkedin, github, email } from "../../utils/images";

const Footer = () => {
  const year = new Date().getFullYear();

  const heart = (
    <svg
      class="w-5 h-5"
      fill="red"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  return (
    <div className="relative">
      <div class="footer-tilt">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="p-10 bg-blue-900 text-white font-gilroySemiBold">
        <h4 className="text-center tracking-wide">
          &copy; {year} - Abhishek Pednekar
        </h4>

        <div className="grid place-items-center pt-10">
          <div className="grid grid-cols-3 place-items-center gap-1 w-2/3 lg:w-1/4">
            <Link
              href="https://www.linkedin.com/in/abhishekpednekar84"
              passHref={true}
            >
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={linkedin}
                  alt="Linkedin icon"
                  height={50}
                  width={50}
                />
              </a>
            </Link>

            <Link href="https://github.com/AbhishekPednekar84" passHref={true}>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={github} alt="Github icon" height={50} width={50} />
              </a>
            </Link>

            <Link href="/#contact">
              <a>
                <Image src={email} alt="Email icon" height={50} width={50} />
              </a>
            </Link>
          </div>
        </div>

        <p className="flex justify-center items-center pt-10 text-lg">
          Made with <span className="px-1">{heart}</span> in Bangalore
        </p>
      </div>
    </div>
  );
};

export default Footer;
