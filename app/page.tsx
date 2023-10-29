"use client";
import AnimateWrapper from "@/components/AnimateWrapper";
import BlogSection from "@/components/home/blog-section";
import HomeSection from "@/components/home/home-section";

export default function Home() {
  return (
    <main className="max-w-2xl w-full flex flex-col items-center justify-center">
      <HomeSection />
      <BlogSection />
    </main>
  );
}
