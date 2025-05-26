import { BlogPosts } from "@/components/Posts";
import { getBlogPosts } from "@/lib/posts";


export default async function BlogIndex() {
const posts = getBlogPosts()
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 md:px-6">
      <h1 className="font-display text-3xl font-semibold mb-8 text-slate-900 dark:text-white">
        Writing
      </h1>

      <BlogPosts allBlogs={posts} />
    </main>
  );
}
