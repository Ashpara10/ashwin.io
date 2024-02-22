import { allBlogs } from "@/.contentlayer/generated";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
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
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Variants, motion } from "framer-motion";
const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.025,
    },
  },
};

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

const HomeSection = () => {
  const [blur, setBlur] = useState(true);
  const router = useRouter();

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      id="home"
      className="max-w-xl w-full  flex flex-col  "
    >
      <motion.div
        variants={variants}
        className="w-full flex items-center justify-between"
      >
        <div className="w-full flex items-center justify-center">
          <Image
            src={"/me/me.jpg"}
            className="w-fit aspect-square rounded-full"
            alt="pfp"
            objectFit="contain"
            width={60}
            height={60}
            quality={100}
          />

          <div className="w-full ml-3 flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between">
              <span className=" text-left text-xl font-semibold tracking-tighter">
                {" "}
                Ashwin Parande 🌻
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus-within:outline-none">
                  <MoreHorizontal />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="px-0 py-2 dark:bg-dark translate-y-6 -translate-x-4 w-52 border dark:border-border rounded-2xl">
                  {Object.entries(navItems).map(([path, { name }]) => {
                    return (
                      <React.Fragment key={path}>
                        <DropdownMenuItem
                          className="text-md px-3 py-1.5"
                          key={path}
                        >
                          <Link href={path}>{name}</Link>
                        </DropdownMenuItem>
                      </React.Fragment>
                    );
                  })}

                  <DropdownMenuSeparator className=" dark:bg-border bg-gray-200/70" />
                  {Object.entries(links).map(([name, { icon, link }]) => {
                    return (
                      <React.Fragment key={name}>
                        <DropdownMenuItem
                          key={name}
                          className="text-md px-3 py-1.5"
                        >
                          <Link href={link} target="_blank">
                            {name}
                          </Link>
                        </DropdownMenuItem>
                      </React.Fragment>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <span className="text-left opacity-80">@ashhhwinnn</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-col items-start justify-center mt-10"
      >
        <span className="text-xl tracking-tighter font-semibold ">
          About Me
        </span>
        <span className="my-2 w-full opacity-90 md:text-base text-sm">
          Crafting powerful and interactive web experiences. Currently pursuing
          my bachelor's degree from Medicaps University, Indore.
        </span>
      </motion.div>
      <motion.div
        variants={variants}
        className="w-full overflow-hidden mt-6 flex border dark:border-border rounded-lg items-center justify-center"
      >
        <Image
          src={`/me/me21.jpg`}
          width={520}
          height={520}
          alt=""
          onLoadingComplete={() => setTimeout(() => setBlur(false), 1500)}
          className={`rounded-lg transition-all delay-75 ease-in-out  w-full  ${
            blur ? "blur-md" : "blur-0"
          }`}
        />
      </motion.div>
      <motion.ul
        variants={variants}
        className="w-full flex flex-col  list-inside list-disc"
      >
        <span className="text-lg font-semibold my-4">Most viewed posts</span>
        {allBlogs.slice(0, 4).map((data, index) => {
          return (
            <li
              key={index}
              className=" opacity-90 tracking-tight   hover:underline"
              onClick={() => router.push(`/blog/${data?.slug}`)}
            >
              {data?.title}
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default HomeSection;
