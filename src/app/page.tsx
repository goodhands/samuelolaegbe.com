import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPosts } from "@/components/Posts";

// export const revalidate = 60 * 60;

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 md:px-6">
      {/* Intro */}
      <Link
        href="/"
        className="group relative inline-block h-11 w-11 overflow-hidden rounded-full ring-2 ring-slate-300 transition-shadow hover:ring-primary dark:ring-slate-600"
      >
        <Image
          src="/avatar.jpeg"
          alt="Samuel Olaegbe"
          fill
          sizes="44px"
          className="object-cover transition-transform duration-200 group-hover:scale-110"
        />
      </Link>

      <h1 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-snug text-slate-900 dark:text-white">
        Making software more human.
      </h1>

      <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        I’m Samuel Olaegbe, a Nigerian full‑stack developer with a background in
        psychology. I write, build, and consult—blending human behaviour with
        code to create products people actually enjoy.
      </p>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
        Currently building&nbsp;
        <Link
          href="/projects/trustbuy"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          TrustBuy
        </Link>
        .
      </p>

      {/* Latest writing */}
	<h2 className="mt-16 mb-6 font-display text-lg font-medium text-slate-900 dark:text-white">
		Latest writing
	</h2>
	<BlogPosts />
      <div className="mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Browse all posts <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  );
}
