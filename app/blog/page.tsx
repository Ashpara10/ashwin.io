"use client";
import { allBlogs } from "@/.contentlayer/generated";
import { useRouter } from "next/navigation";
import React from "react";
import Balancer from "react-wrap-balancer";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl flex items-center justify-start flex-col">
        <h3 className="w-full text-left text-2xl mb-4 font-semibold tracking-tight">
          Blog
        </h3>

        {allBlogs.map((data, index) => {
          return (
            <div
              key={index}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
