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
    "https://github.com/Ashpara10/ashwin.io": {
      name: "Source",
    },
  };

  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
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
                className={` transition-all  ${
                  isActive && "dark:bg-border/50 rounded-lg bg-gray-200"
                }`}
                href={path}
                key={path}
              >
                <li className="relative py-1 px-2.5">{name} </li>
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
