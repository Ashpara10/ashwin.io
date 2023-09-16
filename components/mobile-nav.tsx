"use client";
import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";

const variants: Variants = {
  initial: { x: 0, y: -60 },
  enter: { x: 0, y: 0 },
};
const MobileHeader = () => {
  const [show, setShow] = useState(false);
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <motion.header
      initial={"initial"}
      animate="enter"
      transition={{ duration: 0.8, type: "easeInOut" }}
      variants={variants}
      className="flex md:hidden bg-light dark:bg-dark border border-gray-300 dark:border-border px-4 py-2.5 items-center justify-end z-10 fixed top-0 right-0 left-0 "
    >
      {/* <span className="">Logo</span> */}
      {show && <DropDownMenu />}

      <div className="flex space-x-3">
        {hasMounted && theme === "dark" ? (
          <button
            onClick={() => setTheme("light")}
            className="p-2 rounded-2xl text-sm bg-orange-200 text-black"
          >
            <Sun className="text-sm" />
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="p-2 rounded-2xl text-sm bg-purple-700 text-white"
          >
            {" "}
            <Moon className="text-sm" />
          </button>
        )}

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
      name: "Home",
    },
    "/about": {
      name: "About",
    },
    "/blog": {
      name: "Blog",
    },
    "/github.com/Ashpara10/ashwin.io": {
      name: "Source",
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
      className="absolute  border border-gray-300 dark:border-border w-40 px-4 py-3 rounded-xl bg-gray-100 shadow-md dark:shadow-black/60 dark:bg-dark overflow-hidden top-20 right-4 z-10"
    >
      <motion.ul className="w-full flex flex-col items-center justify-start">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <Link
              className={`text-lg transition-all  hover:text-neutral-800 dark:hover:text-neutral-200 ${
                isActive && "underline"
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
