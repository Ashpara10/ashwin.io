"use client";
import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import {
  GithubIcon,
  HomeIcon,
  Menu,
  Moon,
  Pencil,
  Sun,
  User2,
  XIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useClickAway } from "@uidotdev/usehooks";

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
  const ref = useClickAway(() => {
    setShow(false);
  });

  const DropDownMenu = () => {
    let pathname = usePathname() || "/";
    if (pathname.includes("/blog/")) {
      pathname = "/blog";
    }
    const navItems = {
      "/": {
        name: "Home",
        icon: <HomeIcon className="opacity-90 text-sm" />,
      },
      "/about": {
        name: "About",
        icon: <User2 className="opacity-90 text-sm" />,
      },
      "/blog": {
        name: "Blog",
        icon: <Pencil className="opacity-90 text-sm" />,
      },
    };

    return (
      <motion.div
        ref={ref as any}
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
        className="absolute    w-52  px-4 py-8 rounded-xl bg-gray-100 shadow-md dark:shadow-black/60 dark:bg-dark overflow-hidden top-20 right-4 z-10"
      >
        <motion.ul className="w-full flex flex-col items-center justify-start">
          {Object.entries(navItems).map(([path, { name, icon }]) => {
            const isActive = path === pathname;
            return (
              <Link
                className={`w-full flex items-center justify-between text-lg transition-all  hover:text-neutral-800 rounded-lg dark:hover:text-neutral-200 ${
                  isActive && "bg-gray-200 dark:bg-border"
                }`}
                href={path}
                key={path}
              >
                <li className="relative py-1 px-3">{name} </li>
              </Link>
            );
          })}
          <a
            target="_blank"
            className="w-full px-3 py-1 flex items-center justify-between text-lg transition-all  hover:text-neutral-800 rounded-lg dark:hover:text-neutral-200"
            href="https://github.com/Ashpara10/ashwin.io"
          >
            Github
          </a>
        </motion.ul>
      </motion.div>
    );
  };

  return (
    <motion.header
      initial={"initial"}
      animate="enter"
      transition={{ duration: 0.8, type: "easeInOut" }}
      variants={variants}
      className="flex md:hidden backdrop-blur-lg  px-4 py-2.5 items-center justify-end z-10 fixed top-0 right-0 left-0 "
    >
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
          className="border flex items-center justify-center rounded-lg  border-gray-200 dark:border-border"
        >
          {show ? (
            <XIcon className="opacity-90 m-1.5" />
          ) : (
            <Menu className="opacity-90 m-1.5" />
          )}
        </button>
      </div>
    </motion.header>
  );
};

export default MobileHeader;
