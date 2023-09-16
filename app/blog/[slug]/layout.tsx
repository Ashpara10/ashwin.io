"use client";
import React from "react";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: 0, y: 40 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -10, y: 40 },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.8, type: "spring" }}
      style={{ position: "relative" }}
    >
      <div
        suppressHydrationWarning
        className="px-4 w-full flex items-start justify-center min-h-screen my-16"
      >
        {children}
      </div>
    </motion.article>
  );
};

export default Layout;
