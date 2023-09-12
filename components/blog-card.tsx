import { Blog } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ data }: { data: Blog }) => {
  const { image, title, slug } = data;
  return (
    <article className="w-full border border-gray-300 dark:border-border max-w-md rounded-xl">
      <div className="flex flex-col items-center justify-center px-4 py-6">
        <Link href={`/blog/${slug}`}>
          <h2 className="w-full text-xl  ">{title}</h2>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
