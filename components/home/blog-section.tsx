"use client";
import { allBlogs } from "@/.contentlayer/generated";
import React from "react";
import Link from "next/link";

const BlogSection = () => {
  return (
    <div className="w-full mt-20 mb-8 max-w-xl flex flex-col items-center justify-center">
      <h2 className="  mb-6 tracking-tighter  text-left text-xl font-semibold w-full">
        Most viewed post
      </h2>
      <ul className="w-full  flex flex-col list-outside list-disc px-2">
        {allBlogs.map((data, index) => {
          return (
            <Link
              href={`/blog/${data?.slug}`}
              as={"li"}
              key={index}
              className="flex opacity-90 tracking-tight   hover:underline"
            >
              {data?.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogSection;
