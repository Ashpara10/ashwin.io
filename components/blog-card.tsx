"use client";
import { Blog } from "@/.contentlayer/generated";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { EyeIcon } from "lucide-react";
import Image from "next/image";

const BlogCard = ({ data, index }: { data: Blog; index: number }) => {
  const variants: Variants = {
    initial: { y: 20, opacity: 0 },
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 * i,
        type: "easeInOut",
      },
    }),
  };
  const { title, image, slug, createdAt } = data;
  const [views, setViews] = useState<number>();
  useEffect(() => {
    const getViewBySlug = async () => {
      const res = await fetch(`/api/${slug}/view`);
      const data = await res.json();
      const viewcount = data?.data?.count;
      setViews(viewcount);
    };
    getViewBySlug();
  }, []);
  return (
    <motion.article
      custom={index}
      variants={variants}
      whileInView={"enter"}
      viewport={{
        once: true,
      }}
      initial="initial"
      className="w-full flex flex-col px-4 py-3 gap-3 rounded-md border border-gray-300 dark:border-border max-w-md "
    >
      <div className="flex flex-col items-center gap-3 justify-center  gap-y-2 ">
        <h2 className="w-full text-left  font-semibold text-xl  ">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <span className="flex w-full opacity-80 text-left gap-x-3">
          {new Date(createdAt).toDateString()}
        </span>

        {/* <span className="flex w-full text-left gap-x-3">
          <EyeIcon />
          {views}
        </span> */}
      </div>
    </motion.article>
  );
};

export default BlogCard;
