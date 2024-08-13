/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  images: {
    remotePatterns: [{ hostname: "*" }],
  },
  // images: {
  //   domains: [
  //     "imgs.search.brave.com",
  //     "i.pinimg.com",
  //     "lh3.googleusercontent.com",
  //     "avatars.githubusercontent.com",
  //   ],
  // },
});
