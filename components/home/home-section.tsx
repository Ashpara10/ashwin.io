import React from "react";
import Balancer from "react-wrap-balancer";

const HomeSection = () => {
  return (
    <div className="max-w-2xl w-full flex flex-col items-center justify-center  gap-3">
      <h2 className="text-left w-full text-3xl font-bold">
        <Balancer>
          {" "}
          Hey, I&apos;m 👋{"  "}Ashwin Parande a computer science student from
          Indore,India with a passion for building and creating stuff usefull to
          the masses.I like programming and football .Currently pursuing my
          Bachelor&apos;s from Medicaps University
        </Balancer>
      </h2>

      <div className="w-full items-center justify-start  px-3 my-4 flex gap-x-2 text-lg opacity-100">
        {/* <span>Developer</span>
        {"  |  "}
        <span>Artist</span>
        {"  |  "}

        <span>Creator</span> */}
      </div>
    </div>
  );
};

export default HomeSection;
