"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
  exit: { opacity: 0, x: -10, y: 40 },
};
const AnimateWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={variants}
      animate="enter"
      exit={"exit"}
      initial="hidden"
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;
