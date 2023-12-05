"use client";
import AnimateWrapper from "@/components/AnimateWrapper";
import BlogSection from "@/components/home/blog-section";
import HomeSection from "@/components/home/home-section";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <AnimateWrapper>
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          <HomeSection />
          <BlogSection />
        </div>
      </AnimateWrapper>
    </div>
  );
}
