// src/app/projects/page.tsx
import { getProjects } from '@/lib/posts' // adjust path as needed
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ul className="grid md:grid-cols-2 gap-8">
        {projects.map(proj => (
          <li key={proj.metadata.title} className="group rounded-xl shadow-sm bg-card p-5 hover:shadow-lg transition-all">
            {proj.metadata.image && (
              <Image src={proj.metadata.image} alt={proj.metadata.title} width={480} height={240} className="rounded-lg mb-4" />
            )}
            <h2 className="text-xl font-semibold mb-1">
              <Link href={proj.metadata.url || ''} target="_blank" className="hover:text-primary underline underline-offset-4">
                {proj.metadata.title}
              </Link>
            </h2>
				<p className="text-neutral-600 dark:text-neutral-400 mb-2">{proj.metadata.summary}</p>
				{/* TODO: Not supporting tags yet because of types for Metadata in posts.ts */}
            {/* {proj.metadata.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {proj.metadata.tags.map(tag => (
                  <span key={tag} className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-500 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )} */}
          </li>
        ))}
      </ul>
    </section>
  )
}
