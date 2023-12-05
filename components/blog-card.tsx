"use client";
import { Blog } from "@/.contentlayer/generated";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";

const BlogCard = ({ data, index }: { data: Blog; index: number }) => {
  const variants: Variants = {
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
  const { title, image, slug, createdAt } = data;

  return (
    <motion.article
      // custom={index}
      // variants={variants}
      // whileInView={"enter"}
      // viewport={{
      //   once: true,
      // }}
      // initial="initial"
      className="w-full odd:-rotate-1 even:rotate-1 transition-transform hover:rotate-0 md:min-h-[200px] flex flex-col  gap-3 rounded-3xl border-2 border-gray-300 bg-gray-100 dark:bg-dark dark:border-border "
    >
      <div className="flex flex-col items-center gap-3 justify-center  gap-y-2 px-4 py-5">
        <h2 className="w-full text-left  font-semibold tracking-tight text-2xl  ">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <span className="flex w-full opacity-80 text-left gap-x-3">
          {new Date(createdAt).toDateString()}
        </span>
      </div>
    </motion.article>
  );
};

export default BlogCard;
