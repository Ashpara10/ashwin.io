"use client";
import { Blog, Work } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { MdxComponent } from "./mdx-components";
import {
  ArrowLeft,
  Copy,
  Dot,
  LucideSlash,
  Slash,
  Twitter,
} from "lucide-react";
import { useRouter } from "next/navigation";

const WorkPage = ({ data }: { data: Work }) => {
  const { name, image, readingTime, createdAt, wordCount, slug } = data;
  const Content = useMDXComponent(data?.body.code);

  const router = useRouter();

  return (
    <article className="w-full  mb-10 max-w-2xl flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-start justify-start gap-x-3 px-3 mb-3">
        <Image
          alt=""
          className={`
          duration-700 mb-2 border border-gray-300 dark:border-border rounded-2xl p-2  aspect-square ease-in-out group-hover:opacity-75
          `}
          src={image}
          width={45}
          height={45}
        />

        <Balancer
          className="md:text-3xl text-2xl  font-medium md:font-semibold w-full "
          as={"h1"}
          ratio={0.5}
        >
          {name}
        </Balancer>
      </div>
      <div className=" mb-3 opacity-80 px-4 w-full flex items-center justify-between">
        <div className="flex  items-center justify-center">
          <span className="">{readingTime.text}</span>
          <Dot />
          <span className="">{wordCount} words</span>
        </div>
        <span>
          {new Date(createdAt).toLocaleString("en", {
            minute: "2-digit",
            hour: "2-digit",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      <div className="max-w-none w-full flex flex-col mt-4 gap-y-3 px-4 list-inside ">
        <Content components={MdxComponent as any} />
      </div>
    </article>
  );
};

export default WorkPage;
