import Image from "next/image";
import React, { useState } from "react";

const AnchorTag = (props: any) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 dark:text-blue-600 underline  "
      href={props.href}
    >
      {props.children}
    </a>
  );
};
const StyledHeading1 = (props: any) => {
  return (
    <>
      <h1 className=" text-2xl font-gro font-bold py-1 dark:text-gray-50">
        {props.children}
      </h1>
    </>
  );
};

const BlockQuote = (props: any) => {
  return (
    <blockquote className="w-full border-l-2 flex flex-col items-center justify-center border-violet-500  dark:border-violet-900 dark:text-black py-3 px-4 font-base italic   ">
      {props.children}
    </blockquote>
  );
};

const StyledHeading2 = (props: any) => {
  return (
    <h2 className=" text-2xl font-gro font-bold py-1 dark:text-gray-50">
      {props.children}
    </h2>
  );
};
const StyledHeading3 = (props: any) => {
  return (
    <h3 className=" text-xl font-gro font-bold py-1 dark:text-gray-50">
      {props.children}
    </h3>
  );
};

const UnorderedList = (props: any) => {
  return (
    <ul className="w-full list-outside list-disc flex gap-y-3.5 my-2 dark:text-white flex-col   ">
      {props.children}
    </ul>
  );
};
const OrderedList = (props: any) => {
  return (
    <ol className="w-full list-decimal list-outside flex gap-y-3.5 my-2 dark:text-white flex-col ">
      {props.children}
    </ol>
  );
};

const RoundedImage = (props: any) => {
  const [IsImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <div className=" w-full overflow-hidden rounded-xl bg-gray-200 ">
      <Image
        alt=""
        className={`
    duration-700 ease-in-out 
    ${IsImageLoaded ? "blur-2xl " : " blur-0 "})`}
        src={props.src}
        width={800}
        height={900}
        onLoadingComplete={() => setIsImageLoaded(false)}
      />
    </div>
  );
};

const StrongTag = (props: any) => {
  return <strong className=" font-medium ">{props.children}</strong>;
};

const Para = (props: any) => {
  return (
    <p className="w-full font-gro text-medium dark:text-white  ">
      {props.children}
    </p>
  );
};

export const MdxComponent = {
  strong: StrongTag,
  Image: RoundedImage,
  h1: StyledHeading1,
  h2: StyledHeading2,
  h3: StyledHeading3,
  ul: UnorderedList,
  ol: OrderedList,
  a: AnchorTag,
  blockquote: BlockQuote,
  p: Para,
};
