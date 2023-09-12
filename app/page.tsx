"use client";
import BlogSection from "@/components/home/blog-section";
import HomeSection from "@/components/home/home-section";

export default function Home() {
  return (
    <main className="w-full px-6 flex min-h-screen flex-col items-center justify-center my-10">
      <HomeSection />
      <BlogSection />
    </main>
  );
}
