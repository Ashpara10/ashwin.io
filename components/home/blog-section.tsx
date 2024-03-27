"use client";
import { allBlogs } from "@/.contentlayer/generated";
import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Balancer from "react-wrap-balancer";
import { ArrowRight, ChevronRight, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import Views from "../views";

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      staggerChildren: 0.5,
      // delayChildren: 0.025,
    },
  },
};

const colors = [
  { bg: "#c6f459", color: "black" },
  { bg: "#f39a8e", color: "black" },
  { bg: "#85cbda", color: "black" },
  { bg: "#8ad8c0", color: "black" },
  { bg: "#c77dff", color: "black" },
  { bg: "#ffb600", color: "black" },
];

const BlogSection = () => {
  const router = useRouter();

  const [IsInside, setIsInside] = useState(false);
  const [activer, setActive] = useState<number | null>(null);
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="enter"
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className="w-full  mt-8 mb-8 max-w-2xl flex flex-col items-center justify-center"
    >
      <h2 className="w-full px-2  mb-3 tracking-tighter  text-left text-xl font-semibold ">
        Most viewed Articles
      </h2>
      <motion.ul
        variants={variants}
        className="w-full  snap-mandatory flex overflow-x-scroll scrollbar-none   items-center justify-start gap-x-3   px-2"
        // spaceBetween={50}
        // slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {allBlogs.map((data, index) => {
          return (
            <div
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              key={index}
              className="flex snap-center border min-h-[140px] relative group min-w-[200px] rounded-3xl border-gray-300/80 dark:border-border p-3 w-full bg-white dark:bg-border flex-col items-center justify-between  my-1 gap-x-1      "
            >
              <Balancer
                onClick={() => router?.push(`/blog/${data?.slug}`)}
                className={`text-lg font-medium tracking-tight opacity-90 `}
              >
                {data?.title}
              </Balancer>
              <div
                className={`w-full flex items-center mb-1 mt-2 justify-start `}
              >
                <Eye className=" w-5 h-6 mr-2 opacity-80" />
                <Views slug={data?.slug} />
              </div>
              <div className=" group-hover:flex hidden transition-all   absolute bottom-3 right-4 items-center justify-between ">
                <div className="rounded-full p-1 dark:bg-white dark:text-black bg-black text-white">
                  <ArrowRight className="w-6 h-6 -rotate-45 " />
                </div>
              </div>
            </div>
          );
        })}
      </motion.ul>
    </motion.section>
  );
};

export default BlogSection;
