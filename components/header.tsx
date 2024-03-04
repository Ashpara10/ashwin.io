"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu } from "lucide-react";
import {
  Github,
  Instagram,
  Linkedin,
  MoreHorizontal,
  Twitter,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
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
    "/works": {
      name: "Works",
    },
  };
  const links = {
    Instagram: {
      link: "",
      icon: <Instagram className="opacity-60 text-sm mx-2" />,
    },
    Twitter: {
      link: "https://twitter.com/70Ashrt",
      icon: <Twitter className="opacity-60 text-sm mx-2" />,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/ashwin-parande-657653294/",
      icon: <Linkedin className="opacity-60 text-sm mx-2" />,
    },
    Github: {
      link: "https://github.com/Ashpara10",
      icon: <Github className="opacity-60 text-sm mx-2" />,
    },
  };

  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const router = useRouter();

  return (
    <header className="fixed top-0 w-full flex items-center justify-center z-20 backdrop-blur-md">
      <nav className=" mx-2  overflow-hidden   py-2.5  max-w-2xl  w-full flex items-center justify-end">
        <div className="flex items-center justify-center gap-x-2">
          {hasMounted && theme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="p-2 rounded-xl focus-visible:outline-none text-sm bg-orange-200 text-black"
            >
              <Sun className="text-sm" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="p-2 rounded-xl focus-visible:outline-none text-sm bg-purple-700 text-white"
            >
              {" "}
              <Moon className="text-sm" />
            </button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger className="focus-within:outline-none border dark:border-border dark:bg-dark bg-light p-2 rounded-xl">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-0 py-2 dark:bg-dark translate-y-6 -translate-x-4 w-52 border dark:border-border rounded-2xl">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <DropdownMenuItem
                    className="text-md px-3 py-1.5 focus:dark:bg-border"
                    key={path}
                    onClick={() => router.push(path)}
                  >
                    {name}
                  </DropdownMenuItem>
                );
              })}

              <DropdownMenuSeparator className=" dark:bg-border bg-gray-200/70" />
              {Object.entries(links).map(([name, { icon, link }]) => {
                return (
                  <DropdownMenuItem
                    key={name}
                    className="text-md px-3 py-1.5 focus:dark:bg-border"
                  >
                    <Link href={link} target="_blank">
                      {name}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* <ul className="relative w-full flex gap-x-4 text-lg items-center justify-between md:justify-evenly">
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
                className={`relative duration-300 ease-in transition-all px-4 py-1 
               
              ${isActive && "text-white"}
                `}
                href={path}
                key={path}
                onClick={() => setHoveredPath(path)}
              >
                {name}
                {path === hoveredPath && (
                  <motion.div
                    className="absolute inset-0  bottom-0 left-0 h-full   rounded-full mix-blend-screen  bg-black dark:bg-white dark:mix-blend-difference z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
