"use client";
import { Blog } from "@/.contentlayer/generated";
import { HeartIcon, ViewIcon } from "@/components/icons";
import { db } from "@/lib/firebase";
import { doc, increment, updateDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { ArrowLeft, Dot, Eye } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { MdxComponent } from "./mdx-components";
import Views from "./views";

const BlogPage = ({ data }: { data: Blog }) => {
  const { title, image, readingTime, wordCount, slug } = data;
  const Content = useMDXComponent(data?.body.code);
  const [IsImageLoaded, setIsImageLoaded] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const incrementViews = async () => {
      await updateDoc(doc(db, "posts", data.slug), {
        views: increment(1),
      });
    };
    incrementViews();
  }, []);
  const allHeadings = data?.body.raw
    .split("\r\n")
    .filter((line) => line[0] === "#");

  return (
    <article className="w-full  max-w-2xl flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mb-8 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full  border dark:border-border"
        >
          <ArrowLeft className="opacity-80" />
        </button>
      </div>

      <Balancer
        className="text-2xl md:text-3xl lg:text-4xl  font-semibold w-full mb-3 "
        as={"h1"}
        ratio={0.5}
      >
        {title}
      </Balancer>

      <div className=" mb-3 mt-2 opacity-80 px-2.5 w-full flex items-center justify-between">
        <div className="flex   items-center justify-center">
          <span className="">{readingTime.text}</span>
          <Dot />
          <span className="">{wordCount} words</span>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <Eye className=" w-5 h-6 mr-1 opacity-80" />
          <Views slug={slug} />
        </div>
      </div>

      {data?.image && (
        <div className=" w-full overflow-hidden rounded-xl border-2 border-gray-200 dark:border-border">
          <Image
            alt=""
            className={`
        duration-700 ease-in-out group-hover:opacity-75
        ${IsImageLoaded ? "blur-2xl " : " blur-0"})`}
            src={image}
            width={800}
            height={900}
            onLoadingComplete={() => setIsImageLoaded(false)}
          />
        </div>
      )}
      <div className=" max-w-none w-full flex flex-col mt-6 gap-y-2 px-2 ">
        <Content components={MdxComponent as any} />
      </div>
    </article>
  );
};

export default BlogPage;

const BlogNavigation = ({ blog }: { blog: string }) => {
  return (
    <motion.div className="w-full fixed bottom-6 flex items-center justify-center right-0 left-0 z-20">
      <motion.nav
        initial={{ scale: 0, opacity: 0, y: -100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.75, ease: "easeIn" }}
        className="py-2.5 px-6 w-fit border border-gray-200/70 dark:border-border rounded-full  flex items-center justify-center bg-gray-50/60 backdrop-blur-lg dark:bg-dark/60"
      >
        <div className="flex items-center justify-center gap-x-3">
          <div className="mx-1 flex items-center justify-center gap-x-1">
            <HeartIcon className="w-6 h-6 mx-1 text-black dark:text-white opacity-80" />
            <span>{24}</span>
          </div>
          {/* <div className="mx-1 flex items-center justify-center gap-x-1">
            <MessageIcon className="w-6 h-6 mx-1 text-black dark:text-white opacity-80" />
            <span className="">{0}</span>
          </div> */}
          <div className="mx-1 flex items-center justify-center gap-x-1">
            <ViewIcon className="w-6 h-6 mx-1 text-black dark:text-white opacity-80" />
            <Views slug={blog} />
          </div>
        </div>
      </motion.nav>
    </motion.div>
  );
};
