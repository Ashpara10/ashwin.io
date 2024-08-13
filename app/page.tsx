"use client";
import BlogSection from "@/components/home/blog-section";
import HomeSection from "@/components/home/home-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0.3, y: "-600px" }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "tween",
        ease: "easeInOut",
      }}
      className="w-full  py-16 flex flex-col items-center justify-center "
    >
      <HomeSection />
      <BlogSection />
    </motion.div>
  );
}
