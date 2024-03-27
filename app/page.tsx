"use client";
import BlogSection from "@/components/home/blog-section";
import HomeSection from "@/components/home/home-section";

export default function Home() {
  return (
    <div className="w-full  py-16 flex flex-col items-center justify-center ">
      <HomeSection />
      <BlogSection />
    </div>
  );
}
