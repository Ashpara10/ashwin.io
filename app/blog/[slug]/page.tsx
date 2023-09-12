import { Blog, allBlogs } from "@/.contentlayer/generated";
import BlogPage from "@/components/blog-page";

const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export async function generateStaticParams() {
  return [
    ...allBlogs.map((data) => {
      return { slug: data.slug };
    }),
  ];
}

async function getBlogBySlug(slug: string) {
  const blog = allBlogs.find((blog) => {
    return blog.slug === slug;
  });
  await delay(2000);

  return { data: blog };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getBlogBySlug(params?.slug);
  return <BlogPage data={data as Blog} />;
};

export default Page;
