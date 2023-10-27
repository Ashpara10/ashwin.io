"use client";
import AnimateWrapper from "@/components/AnimateWrapper";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimateWrapper>
      <div
        suppressHydrationWarning
        className=" w-full flex  min-h-screen my-24 "
      >
        {/* <aside className="h-screen w-60 ">Sidebar</aside> */}
        <main className="px-2.5 w-full flex items-center justify-center">
          {children}
        </main>
      </div>
    </AnimateWrapper>
  );
};

export default Layout;
