import Image from "next/image";
import React from "react";
import Balancer from "react-wrap-balancer";

const HomeSection = () => {
  return (
    <div className="max-w-2xl w-full min-h-[60%] flex flex-col items-center justify-center  gap-3">
      <div className="w-full flex flex-col  items-center justify-between">
        <Image
          className="rounded-full "
          width={200}
          height={200}
          alt=""
          quality={100}
          src={"/me3.jpg"}
        />
        <h2 className=" text-lg mt-3">{"  "}Hi, I'm Ashwin Parande</h2>
        <div className=" mt-4 md:ml-4 w-full flex flex-col items-center justify-center">
          <p className="px-4  text-lg opacity-90 my-4 ">
            <Balancer>
              I'm a computer science student from India with a passion for
              building and creating useful things. I like programming and
              football. I'm currently pursuing my Bachelor from Medicaps
              University.
            </Balancer>
          </p>
        </div>
      </div>
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
