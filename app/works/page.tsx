"use client";
import React from "react";
import { allWorks } from "@/.contentlayer/generated";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-2xl flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {allWorks.map((w, i) => {
            return (
              <div
                key={i}
                className="rounded-lg max-w-sm border dark:border-border p-4"
              >
                <div className="flex items-center justify-between gap-x-2">
                  <div className="flex items-center justify-center gap-x-2">
                    <Image
                      src={w?.image}
                      width={40}
                      className="  aspect-square"
                      height={40}
                      alt="logo"
                    />
                    <h3
                      className="text-lg  tracking-tight"
                      onClick={() => router.push(`/works/${w?.slug}`)}
                    >
                      {w.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    {w.tags.split(",").map((t, i) => {
                      return (
                        <span
                          key={i}
                          className="border dark:border-mantis-900 dark:bg-mantis-300 px-3 py-0.5 rounded-full text-sm dark:text-mantis-900 "
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-1 flex flex-col ">
                  <Balancer className="opacity-80 px-2 ">
                    {w?.description}
                  </Balancer>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
