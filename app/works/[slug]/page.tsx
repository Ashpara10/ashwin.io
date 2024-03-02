import React from "react";
import { Work, allWorks } from "@/.contentlayer/generated";
import WorkPage from "@/components/work-page";

export async function generateStaticParams() {
  return [
    ...allWorks.map((data) => {
      return { slug: data.slug };
    }),
  ];
}

async function getWorkBySlug(slug: string) {
  const blog = allWorks.find((blog) => {
    return blog.slug === slug;
  });

  return { data: blog };
}
const Page = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getWorkBySlug(params?.slug);
  return (
    <div className="w-full flex items-center justify-center">
      <WorkPage data={data as Work} />
    </div>
  );
};

export default Page;
