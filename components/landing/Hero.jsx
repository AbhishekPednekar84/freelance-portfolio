import React from "react";
import Image from "next/image";
import { heroImage, heroImageBlur } from "../../utils/images";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const variants = {
  initialButton: { scale: 0 },
  animateCTA: { scale: 1, transition: { delay: 1.2, duration: 0.5 } },
  animateSecondary: { scale: 1, transition: { delay: 1.7, duration: 0.5 } },
  hoverCTA: {
    backgroundColor: "#1E3A8A",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  tapCTA: {
    y: "2px",
    backgroundColor: "#3B82F6",
  },
  hoverSecondary: {
    backgroundColor: "#3B82F6",
    color: "#FFFFFF",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  tapSecondary: { y: "2px" },

  nameHidden: { opacity: 0 },
  nameVisible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },

  headlineHidden: {
    x: "-100vw",
  },
  headlineVisible: {
    x: 0,
    transition: { delay: 0.7, duration: 0.5 },
  },
};

const Hero = () => {
  const handleScheduling = () => {
    Swal.fire({
      title: "Hey there!",
      text: "If you want to take your business online or improve your online presence, I want to help. You can schedule a free (no obligations attached!) consultation with me, and we can have a friendly chat about what you can do to take your business to the next level.",
      showCancelButton: true,
      confirmButtonColor: "#3B82F6",
      cancelButtonColor: "#DB2777",
      confirmButtonText: "SCHEDULE A CONSULT",
      cancelButtonText: "THANKS BUT NO THANKS",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          "https://calendly.com/abhishek-p84/free-consult-with-abhishek-pednekar",
          "noopener,noreferrer"
        );
      }
    });
  };

  const navigateToContactSection = () => {
    window.location.href = "#contact";
  };

  return (
    <div itemScope itemType="https://schema.org/Person">
      <div className="flex flex-col-reverse justify-center lg:flex-row lg:justify-evenly items-center p-7 lg:p-5 -mb-12 md:mb-0 lg:mt-24">
        <div>
          <motion.h1
            variants={variants}
            initial="nameHidden"
            animate="nameVisible"
            itemProp="name"
          >
            Abhishek <span className="text-blue-600">Pednekar</span>
          </motion.h1>
          <motion.p
            variants={variants}
            initial="headlineHidden"
            animate="headlineVisible"
            className="font-gilroy text-xl lg:text-2xl font-semibold pt-5 lg:pt-7"
          >
            Take your business to the{" "}
            <span className="text-blue-500 border-b-2 border-blue-500 font-gilroySemiBold">
              next level
            </span>{" "}
            by boosting your online presence
          </motion.p>

          <div className="flex flex-col lg:flex-row  pt-5 lg:pt-10">
            <motion.button
              variants={variants}
              initial="initialButton"
              animate="animateCTA"
              whileHover="hoverCTA"
              whileTap="tapCTA"
              className="btn-primary mb-5 lg:mb-0"
              onClick={() => navigateToContactSection()}
            >
              Let's work together
            </motion.button>
            <motion.button
              variants={variants}
              initial="initialButton"
              animate="animateSecondary"
              whileHover="hoverSecondary"
              whileTap="tapSecondary"
              className="btn-secondary"
              onClick={() => handleScheduling()}
            >
              Get a free consultation
            </motion.button>
          </div>
        </div>
        <div className="mb-5 lg:mb-0 lg:ml-10">
          <Image
            src={heroImage}
            alt="Abhishek Pednekar"
            height={500}
            width={500}
            placeholder="blur"
            blurDataURL={heroImageBlur}
            priority={true}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
