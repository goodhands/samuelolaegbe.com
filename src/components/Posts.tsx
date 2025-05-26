import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/lib/posts'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div className="mt-8">
      <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
        {allBlogs
          .sort(
            (a, b) =>
              new Date(b.metadata.publishedAt).getTime() -
              new Date(a.metadata.publishedAt).getTime()
          )
          .map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-baseline justify-between py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors rounded-lg group"
              >
                <time
                  dateTime={post.metadata.publishedAt}
                  className="w-36 shrink-0 text-neutral-500 dark:text-neutral-400 text-sm tabular-nums"
                >
                  {formatDate(post.metadata.publishedAt, false)}
                </time>
                <span className="flex-1 ml-4 font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">
                  {post.metadata.title}
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
