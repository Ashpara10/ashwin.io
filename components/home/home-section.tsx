import Image from "next/image";
import React from "react";
import Balancer from "react-wrap-balancer";

const HomeSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start mt-16 pl-10 py-10">
      <div className="mb-8">
        <Image
          className="rounded-full "
          width={200}
          height={200}
          alt=""
          quality={100}
          src={"/me/me2.jpg"}
        />
      </div>
      <h2 className="w-full tracking-tighter leading-[120%] text-left text-4xl font-extrabold">
        Ashwin Parande 🌻
      </h2>
      <span className="opacity-90 text-xl">@ashhhwwinnn</span>
      <Balancer
        className=" tracking-tight opacity-90 text-xl mt-6"
        ratio={0.75}
      >
        Helping Coaches & Agency owners scale past $20k/m+ with their Personal
        Brand: THE SOCIAL SALES SOLUTION
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
