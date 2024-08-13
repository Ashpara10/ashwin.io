import { AlertTriangle, Info, ShieldAlert } from "lucide-react";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import type { MDXComponents } from "mdx/types";

const AnchorTag = (props: any) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-700 font-medium dark:text-indigo-600 underline  underline-offset-2"
      href={props.href}
    >
      {props.children}
    </a>
  );
};
const StyledHeading1 = (props: any) => {
  return (
    <>
      <h1 className="mt-1.5 text-2xl opacity-95 font-semibold  py-1 dark:text-gray-50">
        {props.children}
      </h1>
    </>
  );
};

export const BlockQuote = (props: any) => {
  const [colorScheme, setColorScheme] = useState({
    bg: "#afd89d",
    color: "#13250e",
    icon: <Info />,
  });
  if (props?.type === "danger") {
    setColorScheme({
      bg: "#e63d3d",
      color: "#e63d3d",
      icon: <AlertTriangle />,
    });
  } else if (props?.type === "warning")
    setColorScheme({
      bg: "#b359f3",
      color: "#420962",
      icon: <ShieldAlert />,
    });
  return (
    <blockquote
      className={`w-full rounded-xl flex flex-col items-center justify-center bg-[${colorScheme.bg}] dark:text-[${colorScheme.color}] py-3 px-4 font-base italic   `}
    >
      {props?.children}
    </blockquote>
  );
};

const StyledHeading2 = (props: any) => {
  return (
    <h2 className="mt-1.5 text-2xl opacity-95 font-semibold py-1 ">
      {props.children}
    </h2>
  );
};
const StyledHeading3 = (props: any) => {
  return (
    <h3 className="mt-1.5 text-xl opacity-95 font-medium py-1 ">
      {props.children}
    </h3>
  );
};

const UnorderedList = (props: any) => {
  return (
    <ul className="w-full opacity-90 list-outside list-disc flex gap-y-1.5 mt-2  flex-col   ">
      {props.children}
    </ul>
  );
};
const OrderedList = (props: any) => {
  return (
    <ol className="w-full opacity-90 list-decimal list-outside flex gap-y-1.5 mt-2 flex-col ">
      {props.children}
    </ol>
  );
};

const RoundedImage = (props: any) => {
  const [IsImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <div className="border-2 mt-2 dark:border-border border-gray-200 w-full overflow-hidden rounded-xl ">
      <Image
        alt=""
        className={`
  \ transition-all duration-100 ease-linear
    ${IsImageLoaded ? "blur-xl " : " blur-0 "})`}
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
    <p className="w-full  font-gro text-base dark:text-white  ">
      {props.children}
    </p>
  );
};

export const MdxComponent: MDXComponents = {
  strong: StrongTag,
  Image: RoundedImage,
  h1: StyledHeading1,
  h2: StyledHeading2,
  h3: StyledHeading3,
  ul: UnorderedList,
  ol: OrderedList,
  a: AnchorTag,
  // blockquote: ({
  //   type = "general",
  //   children,
  // }: {
  //   type: "general" | "danger" | "warning";
  //   children: ReactNode;
  // }) => <BlockQuote type={(type = "general")}>{children}</BlockQuote> as,
  blockquote: BlockQuote,
  p: Para,
};
