"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
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
    "https://github.com/Ashpara10/ashwin.io": {
      name: "Source",
    },
  };

  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const [hoveredPath, setHoveredPath] = useState(pathname);
  return (
    <header className=" main-header ">
      <nav className="rounded-3xl mx-2    px-4 py-2.5  max-w-2xl  flex items-center justify-between">
        <ul className="w-full flex gap-x-4 text-lg items-center justify-between md:justify-evenly">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            if (name === "Source") {
              return (
                <a key={name} href={path} target="_blank">
                  {name}
                </a>
              );
            }
            return (
              <Link
                className={`relative duration-300 ease-in transition-all px-4 py-1 ${
                  isActive
                    ? " dark:text-black  text-white "
                    : "dark:text-white text-black"
                }`}
                href={path}
                key={path}
                onClick={() => setHoveredPath(path)}
              >
                <li className="">{name} </li>
                {path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full dark:bg-white  rounded-full bg-black  -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.002,
                    }}
                  />
                )}
              </Link>
            );
          })}
          <li>
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
