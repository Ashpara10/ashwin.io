"use client";
import React, { useState } from "react";
import { Variants, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const variants: Variants = {
  initial: { x: 0, y: "-10%", opacity: 0 },
  enter: { x: 0, y: 0, opacity: 1 },
};
const MobileHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <motion.header
      initial={"initial"}
      animate="enter"
      transition={{ duration: 0.8, type: "easeInOut" }}
      variants={variants}
      className="flex  items-center justify-between z-20 border-b border-gray-200 dark:border-border dark:bg-dark bg-gray-100 md:hidden fixed top-0 w-full px-4 py-3"
    >
      <span>Ashwin</span>
      {show && <DropDownMenu />}

      <div>
        <button
          onClick={() => setShow(!show)}
          className="border flex items-center justify-center bg-gray-300/70 dark:bg-border rounded-lg  border-gray-200 dark:border-border"
        >
          <Menu className="opacity-90 m-1.5" />
        </button>
      </div>
    </motion.header>
  );
};

export default MobileHeader;

const DropDownMenu = () => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  const navItems = {
    "/": {
      name: "home",
    },
    "/about": {
      name: "about",
    },
    "/blog": {
      name: "blog",
    },
    "/github.com": {
      name: "source",
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          //   delay: 0.5,
          type: "ease",
        },
      }}
      exit={{ scale: 0.1, opacity: 0 }}
      className="absolute w-40 px-4 py-3 rounded-xl bg-gray-100 shadow-xl dark:shadow-black/60 dark:bg-dark overflow-hidden top-20 right-4"
    >
      <motion.ul className="w-full flex flex-col items-center justify-start">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <Link
              className={`text-lg transition-all  hover:text-neutral-800 dark:hover:text-neutral-200 ${
                isActive ? "opacity-100" : "opacity-60"
              }`}
              href={path}
              key={path}
            >
              <li className="relative py-1 px-2">{name} </li>
            </Link>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};
