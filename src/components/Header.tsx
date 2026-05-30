"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/projects";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="font-serif text-base font-semibold tracking-tight text-ink sm:text-lg"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="メニューを開く"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>

          <nav className="hidden items-center gap-5 text-sm font-medium text-muted sm:flex">
            <Link href="#projects" className="transition hover:text-accent">
              実績
            </Link>
            <Link href="#contact" className="transition hover:text-accent">
              連絡先
            </Link>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink bg-ink px-4 py-2 text-paper transition hover:bg-accent hover:border-accent"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-surface px-4 py-4 sm:hidden"
        >
          <ul className="flex flex-col gap-3 text-sm font-medium text-muted">
            <li>
              <Link
                href="#projects"
                className="block py-1 transition hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                実績
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-1 transition hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                連絡先
              </Link>
            </li>
            <li>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-ink bg-ink px-4 py-2 text-paper"
                onClick={() => setMenuOpen(false)}
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
