import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start ">
      <div className="max-w-2xl w-full flex flex-col">
        <div className="w-full flex items-center justify-start">
          <span className="text-2xl font-medium">About </span>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-y-3 pt-3 pb-6 ">
          <span className="opacity-80">
            I'm Ashwin, a full-stack web developer with a passion for creating
            and building digital solutions. Currently, I'm pursuing my BCA from
            Medicaps University, where I'm honing my skills in programming and
            software development. When I'm not coding, you'll often find me on
            the football field, enjoying the thrill of the game and the teamwork
            it fosters.
          </span>
          <div className="w-full px-2 flex items-center justify-center">
            <Image
              src={"/hello3.svg"}
              quality={100}
              className="opacity-100 aspect-square  rounded-3xl overflow-hidden"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <span className="opacity-80">
            I love the entire process of web development, from conceptualizing
            ideas to bringing them to life through coding. My focus is not only
            on functionality but also on creating intuitive and engaging user
            experiences. Continuous learning is essential to me, and I'm always
            exploring new technologies and best practices to improve my craft.
          </span>
          <span className="opacity-90">
            Through my personal website, I aim to showcase my projects and share
            insights gained from my journey as a developer. Let's connect and
            explore the exciting world of web development together!
          </span>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Page;
