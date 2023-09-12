"use client";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const Header = () => {
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

  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const [nav, setNav] = useState<boolean>(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <header className=" main-header ">
      <nav className="md:rounded-full  z-10 fixed top-0 md:top-4 px-4 py-2.5  bg-gray-100/40 dark:bg-dark/40 backdrop-blur-xl  w-full md:max-w-2xl  flex items-center justify-between">
        <ul className="w-full flex gap-x-3 text-lg items-center justify-between md:justify-evenly">
          <li onClick={() => setNav(!nav)} className="flex md:hidden">
            <Menu />
          </li>
          {nav && (
            <div className="flex flex-col gap-2 absolute top-14 dark:bg-dark/50 bg-gray-100/60 backdrop-blur-xl items-center justify-center">
              {/* <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Source</li> */}
            </div>
          )}
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                className={`hidden md:flex transition-all  hover:text-neutral-800 dark:hover:text-neutral-200  align-middle ${
                  isActive ? "opacity-100" : "opacity-60"
                }`}
                href={path}
                key={path}
              >
                <li className="relative py-1 px-2">{name} </li>
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
