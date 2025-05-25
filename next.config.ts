import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkSlugImport from 'remark-slug'

const remarkSlug = remarkSlugImport as any;


/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm, remarkSlug],
		rehypePlugins: [[rehypeAutolinkHeadings, {
			behavior: 'wrap',
		}]],
	}
})

module.exports = withMDX(nextConfig)
