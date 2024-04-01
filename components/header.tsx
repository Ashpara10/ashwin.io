"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, Dot } from "lucide-react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Variants, motion, useAnimation } from "framer-motion";

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
  "/guestbook": {
    name: "Guestbook",
  },
};
const links = {
  Instagram: {
    link: "",
    icon: <Instagram className="w-5 h-5 opacity-80 mr-2" />,
  },
  Twitter: {
    link: "https://twitter.com/70Ashrt",
    icon: <Twitter className="w-5 h-5 opacity-80 mr-2" />,
  },
  Linkedin: {
    link: "https://www.linkedin.com/in/ashwin-parande-657653294/",
    icon: <Linkedin className="w-5 h-5 opacity-80 mr-2" />,
  },
  Github: {
    link: "https://github.com/Ashpara10",
    icon: <Github className="w-5 h-5 opacity-80 mr-2" />,
  },
};
const Header = () => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  const { theme, setTheme } = useTheme();

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const [show, setShow] = useState(false);

  const router = useRouter();
  const controls = useAnimation();

  return (
    <header className="fixed top-0 w-full flex items-center justify-center z-20 backdrop-blur-md">
      <nav className=" mx-2 px-2 overflow-hidden   py-2.5  max-w-2xl  w-full flex items-center justify-end">
        <div className="flex z-30 items-center justify-center gap-x-2">
          {hasMounted && theme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="p-2  rounded-xl focus-visible:outline-none text-sm bg-orange-200 text-black"
            >
              <Sun className="text-sm" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="p-2 rounded-xl  focus-visible:outline-none text-sm bg-purple-700 text-white"
            >
              {" "}
              <Moon className="text-sm" />
            </button>
          )}
          <motion.button
            onClick={() => setShow(!show)}
            className=" focus-within:outline-none border dark:border-border dark:bg-dark bg-light p-2 rounded-xl"
          >
            <Menu />
          </motion.button>
        </div>
        {show && (
          <motion.div
            onClick={() => setShow(false)}
            className="w-full h-screen fixed z-10 bg-black/50 top-0 bottom-0 right-0 left-0"
          />
        )}
        {show && (
          <motion.div
            className=" z-30 dark:bg-dark bg-white  rounded-3xl w-52 py-3  border border-gray-200/70 dark:border-border fixed top-16 "
            initial={{ opacity: 0, translateY: -450 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ opacity: 0, translateY: -450 }}
            transition={{ type: "tween" }}
          >
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <motion.div
                  className="text-md px-4 flex items-center justify-start gap-x-0.5 w-full first:border-none border-t border-gray-200/70 dark:border-border py-2 focus:dark:bg-border"
                  key={path}
                  onClick={() => router.push(path)}
                >
                  {name}
                </motion.div>
              );
            })}

            {Object.entries(links).map(([name, { icon, link }]) => {
              return (
                <motion.div
                  key={name}
                  className="text-md px-4 first:border-none border-t flex items-center justify-start gap-x-0.5 border-gray-200/70 dark:border-border py-1.5 focus:dark:bg-border"
                >
                  <Link href={link} target="_blank">
                    {name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
