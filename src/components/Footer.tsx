import Link from "next/link";
import { Github, Linkedin, Rss } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-sm text-text/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 md:flex-row md:justify-between md:px-6">
        {/* Left: copyright */}
        <p className="order-2 md:order-1">
          © {year} Samuel Olaegbe. All rights reserved.
        </p>

        {/* Right: social / misc */}
        <nav
          className="order-1 flex gap-4 md:order-2"
          aria-label="Social links"
        >
          <Link
            href="https://github.com/goodhands"
            className="transition-opacity hover:opacity-100 opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/olaegbe-samuel"
            className="transition-opacity hover:opacity-100 opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="/rss.xml"
            className="transition-opacity hover:opacity-100 opacity-80"
          >
            <Rss size={18} />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
