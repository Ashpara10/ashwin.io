import { allBlogs } from "@/.contentlayer/generated";
import { db } from "@/lib/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";

const HomeSection = () => {
  // const seedData = async (slug: string) => {
  //   const { status, error, data } = await db.from("post").insert({
  //     slug: slug,
  //   });
  //   console.log({ status, error, data });
  // };
  // useEffect(() => {
  //   allBlogs.map(async (e) => {
  //     await setDoc(doc(db, "posts", e.slug), {
  //       slug: e.slug,
  //       likes: 0,
  //       views: 0,
  //     });
  //   });
  // }, [allBlogs.length]);

  const [isInside, setIsInside] = useState(false);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const updatePosition = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    setPosition({
      x: clientX,
      y: clientY,
    });
  };

  useEffect(() => {
    if (isInside) {
      document.addEventListener("mousemove", updatePosition, false);
      document.addEventListener("mouseenter", updatePosition, false);
    } else {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    }
  }, [isInside]);

  return (
    <div className="w-full h-full flex flex-col items-start justify-start mt-16 pl-4 py-10">
      <div className="w-full items-center justify-start ">
        <Image
          className="rounded-3xl   transition-all ease-in-out"
          width={700}
          height={500}
          alt=""
          quality={100}
          src={`/card.svg`}
        />
      </div>

      <div
        className="flex flex-col"
        onMouseEnter={() => setIsInside(true)}
        onMouseLeave={() => setIsInside(false)}
      >
        <h2 className="w-full tracking-tighter leading-[120%] text-left text-4xl font-extrabold">
          Ashwin Parande 🌻
        </h2>
        <span className="opacity-90 text-xl">@ashhhwwinnn</span>
      </div>
      {isInside && (
        <motion.div
          transition={{
            type: "spring",
            bounce: 0.03,
          }}
          className="absolute z-30 dark:bg-dark flex items-center justify-center gap-x-2 bg-white border dark:border-border border-gray-200 rounded-full px-6 py-2 "
          style={{
            top: position.y,
            left: position.x,
          }}
        >
          Instagram <ArrowDownLeft className="rotate-180 " />
        </motion.div>
      )}
      <Balancer
        className=" tracking-tight opacity-90 text-lg mt-6"
        ratio={0.75}
      >
        Helping Coaches & Agency owners scale past $20k/m+ with their Personal
        Brand: THE SOCIAL SALES SOLUTION
        {/* Football {">"} Programming {">"} Coffee <br />
        No particular order */}
        {/* Chasing Excellence & Creating things usefull to the masses */}
        {/* Hey, I&apos;m a computer science student from Indore with a passion
          for building and creating stuff usefull to the masses.I like
          programming and football .Currently pursuing my Bachelor&apos;s from
          Medicaps University */}
      </Balancer>
    </div>
  );
};

export default HomeSection;
