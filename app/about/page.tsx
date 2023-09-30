"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Page = () => {
  return (
    <div className=" w-full min-h-screen mt-24 flex flex-col items-center justify-center">
      <motion.div className="max-w-3xl w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-left w-full mb-2 px-2">
          # About Me
        </h2>
        <Image
          className="w-full hover:saturate-50  rounded-3xl p-2 col-span-2"
          width={500}
          height={300}
          alt="me"
          src={"/assset1.jpg"}
        />
      </motion.div>
    </div>
  );
};

export default Page;
