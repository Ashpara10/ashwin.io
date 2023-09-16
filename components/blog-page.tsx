"use client";
import { Blog } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React, { useState } from "react";
import Balancer from "react-wrap-balancer";
import { MdxComponent } from "./mdx-components";
import ViewCounter from "./view-counter";

const BlogPage = ({ data }: { data: Blog }) => {
  const { title, image, readingTime, createdAt, wordCount, slug } = data;
  const Content = useMDXComponent(data?.body.code);
  const [IsImageLoaded, setIsImageLoaded] = useState(true);
  return (
    <article className="w-full px-2 max-w-2xl flex flex-col items-center justify-center">
      <span className="w-full gap-x-3 mb-3 flex items-center justify-start opacity-90 text-left">
        {new Date(createdAt).toDateString()}
        <ViewCounter slug={slug} />
      </span>
      <h1 className="text-3xl md:text-4xl font-bold w-full mb-2 ">
        <Balancer ratio={0.5}>{title}</Balancer>
      </h1>
      <div className=" mb-4 opacity-90 px-2.5 w-full flex items-center justify-between">
        <div className="flex gap-x-2 items-center justify-center">
          <span className="text-lg ">{readingTime.text}</span>
          {"  |  "}
          <span className="text-lg ">{wordCount} words</span>
        </div>
      </div>
      <div className=" w-full overflow-hidden rounded-xl border-2 border-gray-200 dark:border-border">
        <Image
          alt=""
          className={`
        duration-700 ease-in-out group-hover:opacity-75
        ${IsImageLoaded ? "blur-2xl " : " blur-0"})`}
          src={image}
          width={800}
          height={900}
          onLoadingComplete={() => setIsImageLoaded(false)}
        />
      </div>
      <div className=" max-w-none w-full flex flex-col mt-6 gap-y-4 px-2 ">
        <Content components={MdxComponent} />
      </div>
    </article>
  );
};

export default BlogPage;
