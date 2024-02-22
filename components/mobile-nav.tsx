"use client";
import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Menu,
  Moon,
  MoreHorizontal,
  Sun,
  Twitter,
  XIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useClickAway } from "@uidotdev/usehooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
    "/work": {
      name: "Works",
    },
  };
  const links = {
    Instagram: {
      link: "",
      icon: <Instagram className="opacity-60 text-sm mx-2" />,
    },
    Twitter: {
      link: "",
      icon: <Twitter className="opacity-60 text-sm mx-2" />,
    },
    Linkedin: {
      link: "",
      icon: <Linkedin className="opacity-60 text-sm mx-2" />,
    },
    Github: {
      link: "",
      icon: <Github className="opacity-60 text-sm mx-2" />,
    },
  };
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <motion.header
      initial={"initial"}
      animate="enter"
      transition={{ duration: 0.8, type: "easeInOut" }}
      variants={variants}
      className=" w-full flex px-4 py-2.5 items-center justify-center z-10 absolute top-0"
    >
      <nav className="max-w-2xl   px-4 w-full flex items-center justify-end">
        {hasMounted && theme === "dark" ? (
          <button
            onClick={() => setTheme("light")}
            className="p-2 mr-3 rounded-2xl opacity-80 text-sm "
          >
            <Sun className="text-sm" />
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="p-2 mr-3 opacity-80 rounded-2xl text-sm "
          >
            {" "}
            <Moon className="text-sm" />
          </button>
        )}
      </nav>
    </motion.header>
  );
};

export default MobileHeader;
