"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

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
    "/github.com/Ashpara10/ashwin.io": {
      name: "Source",
    },
  };

  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <header className=" main-header  ">
      <nav className="rounded-3xl mx-2 shadow-md shadow-black/30  dark:shadow-black/70 z-10 fixed top-4 px-4 py-2.5  bg-gray-100/40 dark:bg-dark/40 backdrop-blur-lg  max-w-2xl  flex items-center justify-between">
        <ul className="w-full flex gap-x-3 text-lg items-center justify-between md:justify-evenly">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                className={` transition-all  ${
                  isActive ? "opacity-100" : "opacity-70"
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
