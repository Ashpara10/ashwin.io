import { Context, Tcontext } from "@/lib/providers";
import { Variants, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.025,
    },
  },
};

const HomeSection = () => {
  const [blur, setBlur] = useState(true);
  const router = useRouter();
  const { onEnter, onLeave, isInside } = useContext(Context) as Tcontext;
  // const { x, y } = useMousePosition();

  return (
    <motion.div id="home" className="max-w-2xl w-full  flex flex-col  ">
      <motion.div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center justify-center">
          <Image
            src={"/me/cat.jpg"}
            className="w-fit aspect-square rounded-full border border-gray-300 dark:border-border"
            alt="pfp"
            style={{ objectFit: "cover" }}
            width={50}
            height={50}
            quality={100}
          />

          <div
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="w-full ml-4 flex flex-col items-start justify-center"
          >
            <div className="w-full flex items-center justify-between">
              <span className=" text-left text-lg md:text-xl font-semibold tracking-tighter">
                {" "}
                Ashwin Parande 🌻
              </span>
            </div>
            <span className="text-left opacity-80">
              Front-End web developer
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex flex-col items-start justify-center mt-6">
        <span className="text-xl  tracking-tight font-medium ">Bio</span>
        <span className="my-2 w-full  text-opacity-90 md:text-base text-sm">
          Crafting powerful and interactive{" "}
          <b className="font-medium ">web experiences</b>. Currently pursuing my
          bachelor's degree from Medicaps University, Indore.
        </span>
        <div className="w-full gap-x-3 flex mt-2 items-center justify-start">
          <button className="rounded-3xl  bg-black dark:text-black dark:bg-white font-medium text-white tracking-tight px-4 py-1.5">
            <a href="https://github.com/Ashpara10/" target="_blank">
              Github
            </a>
          </button>
          <button className="rounded-3xl  bg-black dark:text-black dark:bg-white font-medium text-white tracking-tight px-4 py-1.5">
            <a href="https://x.com/70Ashrt" target="_blank">
              Twitter
            </a>
          </button>
        </div>
      </motion.div>
      <motion.div className="w-full overflow-hidden mt-6 flex  rounded-xl items-center relative justify-center">
        <Image
          src={`/p.jpg`}
          width={520}
          height={520}
          alt=""
          onLoadingComplete={() => setTimeout(() => setBlur(false), 200)}
          className={`rounded-lg transition-all delay-75 ease-in-out  w-full  ${
            blur ? "backdrop-blur-lg " : "backdrop-blur-none "
          }`}
        />
      </motion.div>
      {/* <motion.div className="masonry gap-3 sm:masonry-sm md:masonry-md">
        {[...Array(9)].map((_, index) => {
          const src = `/about/art${index + 1}.jpg`;
          console.log(src);
          return (
            <Image
              key={index}
              className="object-cover  aspect-square rounded-lg border border-neutral-300 dark:border-border"
              src={src}
              width={520}
              height={520}
              alt=""
            />
          );
        })}
      </motion.div> */}
    </motion.div>
  );
};

export default HomeSection;
