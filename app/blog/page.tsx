"use client";
import { allBlogs } from "@/.contentlayer/generated";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Balancer from "react-wrap-balancer";
import { AnimatePresence, Variants, motion } from "framer-motion";
import useMousePosition from "@/lib/useMousePosition";
import Image from "next/image";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      bounce: 0,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};
const Page = () => {
  const router = useRouter();
  const { x, y } = useMousePosition();
  const [active, setActive] = useState<{ active: boolean; index: number }>();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <AnimatePresence>
        {active?.active ? (
          <motion.div
            transition={{ duration: 0.75, type: "keyframes" }}
            style={{ top: y, left: x }}
            className="max-w-md overflow-hidden w-full fixed z-20"
          >
            <Image
              alt=""
              className="rounded-lg"
              width={400}
              height={350}
              src={allBlogs[active?.index as number]?.image as string}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="w-full max-w-2xl flex items-center justify-start flex-col">
        <h3 className="w-full text-left text-2xl mb-2 font-semibold tracking-tight">
          Read all Blogs 📰
        </h3>
        <span className="opacity-80 mb-4">
          On a mission to build products developers love, and along the way,
          teach the next generation of developers. Here's a summary of my work
          so far.
        </span>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify- w-full"
        >
          {allBlogs.map((data, index) => {
            return (
              <motion.div
                onMouseEnter={() => setActive({ active: true, index: index })}
                onMouseLeave={() => setActive({ active: false, index: index })}
                key={index}
                variants={item}
                className="flex w-full  items-center gap-x-2  justify-center rounded-lg "
              >
                <div className=" w-full flex flex-col  items-start justify-center">
                  <Balancer
                    onClick={() => router.push(`/blog/${data?.slug}`)}
                    className="text-lg  tracking-tight  hover:after:content-['__↗']"
                  >
                    {data?.title}
                  </Balancer>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
