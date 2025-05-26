"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

function buildBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [
    { name: "~", href: "/" },
    ...segments.map((seg, idx) => ({
      name: seg.replace(/-/g, " "),
      href: "/" + segments.slice(0, idx + 1).join("/"),
    })),
  ];
  return crumbs;
}

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const crumbs = buildBreadcrumbs(pathname);

  // Only show theme toggle after mounting to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-6">
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="text-sm font-medium">
          {crumbs.map((c, i) => (
            <span key={c.href} className="inline-flex items-center">
              {i !== 0 && <span className="mx-1 opacity-50">/</span>}
              <Link
                href={c.href}
                className="transition-opacity hover:opacity-100 opacity-80"
              >
                {c.name}
              </Link>
            </span>
          ))}
        </nav>

        {/* Theme toggle */}
        {mounted && (
          <motion.button
            initial={{ rotate: 0 }}
            animate={{ rotate: theme === "dark" ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md p-2 opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        )}
      </div>
    </header>
  );
}
