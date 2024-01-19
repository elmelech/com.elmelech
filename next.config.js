// import rehypePrism from '@mapbox/rehype-prism'
// import nextMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'
const rehypePrism = require("@mapbox/rehype-prism");
const nextMDX = require("@next/mdx");
const remarkGfm = import("remark-gfm");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  // basePath: '/',
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

// export default withMDX(nextConfig)

module.exports = withMDX(nextConfig);