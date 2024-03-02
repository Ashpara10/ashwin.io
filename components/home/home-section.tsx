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
import Balancer from "react-wrap-balancer";
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
            src={"/me/cat.jpg"}
            className="w-fit aspect-square rounded-full border border-gray-300 dark:border-border"
            alt="pfp"
            objectFit="contain"
            width={60}
            height={60}
            quality={100}
          />

          <div className="w-full ml-4 flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between">
              <span className=" text-left text-xl font-semibold tracking-tighter">
                {" "}
                Ashwin Parande 🌻
              </span>
            </div>
            <span className="text-left opacity-80">
              Full-stack web developer
            </span>
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
          src={`/me/me.jpg`}
          width={520}
          height={520}
          alt=""
          onLoadingComplete={() => setTimeout(() => setBlur(false), 1500)}
          className={`rounded-lg transition-all delay-75 ease-in-out  w-full  ${
            blur ? "blur-md" : "blur-0"
          }`}
        />
      </motion.div>
      <motion.span variants={variants} className="text-lg font-semibold my-4">
        Most Viewed Articles
      </motion.span>
      <motion.div
        variants={variants}
        className="w-full grid grid-cols-1 gap-y-3"
      >
        {allBlogs.slice(0, 4).map((data, index) => {
          return (
            <div
              key={index}
              className="flex w-full  items-center gap-x-2 justify-center rounded-lg "
            >
              <div className=" w-full flex  items-center justify-between">
                <Balancer
                  onClick={() => router.push(`/blog/${data?.slug}`)}
                  className="text-lg tracking-tight  hover:after:content-['__↗']"
                >
                  {data?.title}
                </Balancer>
                <span className="text-sm mb-1 opacity-80">
                  {new Date(data?.createdAt).toDateString()}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
