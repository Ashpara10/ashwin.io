"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Variants, motion } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";

const Page = () => {
  const socials = [
    {
      name: "Instagram",
      icon: "/icons/insta.svg",
    },
    {
      name: "Twitter",
      icon: "/icons/twitter.svg",
    },
    {
      name: "Pinterest",
      icon: "/icons/pinterest.svg",
    },
    {
      name: "LinkedIn",
      icon: "/icons/linkedIn.svg",
    },
  ];
  const socialCardVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 * i,
        type: "spring",
      },
    }),
  };
  const variants: Variants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
    exit: { opacity: 0, x: -10, y: 40 },
  };

  const [IsLoaded, setIsLoaded] = useState(false);
  return (
    <div className=" w-full min-h-screen mt-24 flex flex-col items-center justify-center px-3">
      <motion.div
        // ref={ref}
        variants={variants}
        animate="enter"
        exit={"exit"}
        initial="hidden"
        className="max-w-2xl w-full gap-y-2 flex flex-col items-center justify-center"
      >
        <h2 className="w-full text-left px-1.5 mt-4 tracking-tighter text-4xl font-bold ">
          About Me
        </h2>
        <div className={`w-full overflow-hidden  rounded-3xl`}>
          <p className="w-full px-2.5 mt-2">
            Hey, I&apos;m a computer science student from Indore with a passion
            for building and creating stuff usefull to the masses.I like
            programming and football .Currently pursuing my Bachelor&apos;s from
            Medicaps University
          </p>
        </div>
        <Image
          onLoadingComplete={() => setIsLoaded(true)}
          className={`  max-w-sm p-3 w-full overflow-hidden rounded-2xl  col-span-2`}
          width={500}
          height={300}
          alt="me"
          src={"/card4.svg"}
        />
      </motion.div>
      <div className="mb-10"></div>
    </div>
  );
};

export default Page;
