"use client";
import { allBlogs } from "@/.contentlayer/generated";
import { AnimationProps, Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";

const Page = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="w-full flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl grid grid-cols-1 md:grid-cols-2 mt-20 items-center justify-center"
      >
        {allBlogs.map((data, index) => {
          return (
            <motion.div
              // initial="hidden"
              // animate="visible"
              variants={item}
              key={index}
              className="w-full p-3  flex flex-col items-start justify-start m-3"
            >
              <Image
                className="rounded-3xl w-full bg-cover h-[210px] "
                width={400}
                height={300}
                alt=""
                src={data?.image}
              />

              <Link
                href={`/blog/${data?.slug}`}
                className="text-2xl mt-3 font-semibold px-2"
              >
                <Balancer>{data?.title}</Balancer>
              </Link>
              <span className="px-2 mt-1 opacity-75">
                {new Date(data?.createdAt).toDateString()}
              </span>
              <div className=" flex items-center justify-start gap-x-2 px-2 mt-3">
                {data?.tags.split(",").map((e, i) => {
                  return (
                    <span
                      className="px-3 text-sm py-1.5  dark:bg-border bg-gray-300 rounded-full"
                      key={i}
                    >
                      {e}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Page;
