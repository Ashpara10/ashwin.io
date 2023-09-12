"use client";
import { Blog } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React from "react";
import Balancer from "react-wrap-balancer";
import { MdxComponent } from "./mdx-components";

const BlogPage = ({ data }: { data: Blog }) => {
  const { title, image, readingTime, wordCount } = data;
  const Content = useMDXComponent(data?.body.code);
  return (
    <article className="w-full px-2 max-w-2xl flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold w-full mb-2 ">
        <Balancer ratio={0.5}>{title}</Balancer>
      </h1>
      <div className=" mb-4 px-2.5 w-full flex items-center justify-between">
        <div className="flex gap-x-2 items-center justify-center">
          <span className="text-lg ">{readingTime.text}</span>
          {"  |  "}
          <span className="text-lg ">{wordCount} words</span>
        </div>
      </div>
      <Image
        alt=""
        className="rounded-2xl"
        src={image}
        width={800}
        height={900}
      />
      <div className="opacity-90 max-w-none w-full flex flex-col mt-6 gap-y-4 px-2 ">
        <Content components={MdxComponent} />
      </div>
    </article>
  );
};

export default BlogPage;
