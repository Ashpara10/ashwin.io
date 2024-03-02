// contentlayer.config.ts
import {
  makeSource,
  defineDocumentType
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    image: { type: "string", required: true },
    createdAt: { type: "date", required: true },
    icon: { type: "string", required: true },
    description: { type: "string", required: true }
  },
  computedFields
}));
var Work = defineDocumentType(() => ({
  name: "Work",
  filePathPattern: `works/*.mdx`,
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true },
    createdAt: { type: "string", required: true },
    tags: { type: "string", required: true },
    url: { type: "string", required: false },
    description: { type: "string", required: true }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Work],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism
      // rehypePrettyCode,
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-6BFSVJFS.mjs.map
