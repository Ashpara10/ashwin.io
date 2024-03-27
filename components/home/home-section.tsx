import { allBlogs } from "@/.contentlayer/generated";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
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
      className="max-w-2xl w-full  flex flex-col  "
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
            style={{ objectFit: "cover" }}
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
        className="w-full overflow-hidden mt-6 flex  rounded-lg items-center justify-center"
      >
        <Image
          src={`/p.jpg`}
          width={520}
          height={520}
          alt=""
          onLoadingComplete={() => setTimeout(() => setBlur(false), 1500)}
          className={`rounded-lg transition-all delay-75 ease-in-out  w-full  ${
            blur ? "blur-md" : "blur-0"
          }`}
        />
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
