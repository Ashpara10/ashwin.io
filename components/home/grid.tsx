import Image from "next/image";
import React, { useState } from "react";

const ImageGrid = () => {
  const imgs = [
    { w: 400, h: 400, url: "/me/me.jpg" },
    { w: 400, h: 400, url: "/me/me.jpg" },
    {
      w: 400,
      h: 400,
      url: "https://i.pinimg.com/236x/dd/16/de/dd16de1b9027ca5f0d31eb3a0be381d1.jpg",
    },
    { w: 400, h: 700, url: "/me/snap.jpg" },
    {
      w: 400,
      h: 400,
      url: "/me/snap.jpg",
    },
  ];

  return (
    <div className="w-full grid auto-rows-[192px] grid-cols-3 gap-2">
      {[...Array(6)].map((_, i) => {
        // getImg(i);
        return (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/20 bg-neutral-100 overflow-hidden dark:bg-neutral-900 ${
              i === 3 || i === 5 ? "col-span-2" : ""
            } ${i === 2 && "row-span-2"} `}
          >
            {/* <Image
              src={imgs[i]?.url}
              alt=""
              className="ap"
              width={imgs[i]?.w}
              height={imgs[i]?.h}
              objectFit="cover"
              objectPosition="center"
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
