import Link from "next/link";
import { siteConfig } from "@/data/projects";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="#projects" className="transition hover:text-slate-900">
            実績
          </Link>
          <Link href="#contact" className="transition hover:text-slate-900">
            連絡先
          </Link>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
