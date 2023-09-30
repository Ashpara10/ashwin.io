import {
  ComputedFields,
  makeSource,
  defineDocumentType,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";
// import rehypePrettyCode from "rehype-pretty-code";
const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    image: { type: "string", required: true },
    createdAt: { type: "string", required: true },
  },
  computedFields,
}));
export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      // rehypePrettyCode,
    ],
  },
});
