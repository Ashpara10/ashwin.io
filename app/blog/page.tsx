"use client";
import { allBlogs } from "@/.contentlayer/generated";
import { useRouter } from "next/navigation";
import React from "react";
import Balancer from "react-wrap-balancer";
import { Variant, motion } from "framer-motion";
const Page = () => {
  const router = useRouter();
  const container: { [key: string]: Variant } = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        bounce: 0,
        staggerChildren: 0.2,
      },
    },
  };

  const item: { [key: string]: Variant } = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl flex items-center justify-start flex-col">
        <h3 className="w-full text-left text-2xl mb-4 font-semibold tracking-tight">
          Blog
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify- w-full"
        >
          {allBlogs.map((data, index) => {
            return (
              <motion.div
                key={index}
                variants={item}
                className="flex w-full  items-center gap-x-2 justify-center rounded-lg "
              >
                <div className=" w-full flex flex-col  items-start justify-center">
                  <Balancer
                    onClick={() => router.push(`/blog/${data?.slug}`)}
                    className="text-lg tracking-tight  hover:after:content-['__↗']"
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
