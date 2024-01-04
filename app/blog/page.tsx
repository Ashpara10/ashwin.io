import { allBlogs } from "@/.contentlayer/generated";
import BlogCard from "@/components/blog-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";

const Page = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-center justify-center">
        {allBlogs.map((data, index) => {
          return (
            <div
              key={index}
              className="max-w-sm flex flex-col items-start justify-center m-3"
            >
              <Image
                className="rounded-t-3xl"
                width={400}
                height={300}
                alt=""
                src={data?.image}
              />
              <Link
                href={`/blog/${data?.slug}`}
                className="text-2xl font-semibold pt-2"
              >
                <Balancer>{data?.title}</Balancer>
              </Link>
              <span className="px-2 opacity-75">
                {new Date(data?.createdAt).toDateString()}
              </span>
              <div className=" flex items-center justify-start gap-x-2 mt-2">
                {data?.tags.split(",").map((e, i) => {
                  return (
                    <span
                      className="px-2.5 py-1.5  dark:bg-border bg-gray-300 rounded-xl"
                      key={i}
                    >
                      {e}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
