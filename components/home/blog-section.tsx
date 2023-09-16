"use client";
import { allBlogs } from "@/.contentlayer/generated";
import React from "react";
import BlogCard from "../blog-card";

const BlogSection = () => {
  return (
    <div className="w-full max-w-2xl flex flex-col items-center justify-center">
      <h2 className=" px-2 mb-4 text-left text-3xl font-bold w-full">
        Popular Blogs
      </h2>
      <div className="w-full gap-3 grid grid-cols-1 sm:grid-cols-2 ">
        {allBlogs.slice(0, 4).map((data, index) => {
          return <BlogCard key={data?._id} index={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default BlogSection;
