"use client";
import { Blog, Work } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { MdxComponent } from "./mdx-components";
import { ArrowLeft, Copy, Dot, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

const WorkPage = ({ data }: { data: Work }) => {
  const { name, image, readingTime, createdAt, wordCount, slug } = data;
  const Content = useMDXComponent(data?.body.code);
  const [IsImageLoaded, setIsImageLoaded] = useState(true);
  const router = useRouter();

  return (
    <article className="w-full  mb-10 max-w-2xl flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mb-8 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full border dark:border-border"
        >
          <ArrowLeft />
        </button>
        <div className="w-fit flex items-center opacity-80 justify-center gap-x-4">
          <button
            className="mx-2"
            onClick={() =>
              window.navigator.clipboard.writeText(window.location.href)
            }
          >
            <Copy />
          </button>
          <button className="mx-2">
            <Twitter />
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-start gap-x-3 px-3 mb-3">
        <Image
          alt=""
          className={`
          duration-700 ease-in-out group-hover:opacity-75
          ${IsImageLoaded ? "blur-2xl " : " blur-0"})`}
          src={image}
          width={45}
          height={45}
          onLoadingComplete={() => setIsImageLoaded(false)}
        />

        <Balancer
          className="text-2xl md:text-3xl  font-bold w-full "
          as={"h1"}
          ratio={0.5}
        >
          {name}
        </Balancer>
      </div>
      <div className=" mb-3 mt-2 opacity-80 px-2.5 w-full flex items-center justify-between">
        <div className="flex  gap-x-1 items-center justify-center">
          <span className="">{readingTime.text}</span>
          <Dot />
          <span className="">{wordCount} words</span>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          {/* <Heart /> */}
        </div>
      </div>

      <div className="max-w-none w-full flex flex-col mt-6 gap-y-4 px-4 list-inside ">
        <Content components={MdxComponent} />
      </div>
    </article>
  );
};

export default WorkPage;
