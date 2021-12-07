import { motion } from "framer-motion";

const svgVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 1.2, duration: 2 },
  },
};

const services = [
  {
    name: "Website",
    icon: (
      <svg
        class="w-2 h-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        ></motion.path>
      </svg>
    ),
    description: "Design, development and deployment of websites",
  },
  {
    name: "SEO",
    icon: (
      <svg
        class="w-2 h-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        ></motion.path>
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        ></motion.path>
      </svg>
    ),
    description: "Effective SEO to increase the visibility of your business",
  },
  {
    name: "Digital Marketing",
    icon: (
      <svg
        class="w-2 h-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        ></motion.path>
      </svg>
    ),
    description:
      "Effective ad campaigns to expand your customer base and boost your sales",
  },
];

export default services;
