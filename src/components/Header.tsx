"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/projects";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--glass)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:h-14 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-fg sm:text-[15px]"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-fg-secondary sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="メニュー"
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

          <nav className="hidden items-center gap-8 text-[13px] text-fg-secondary sm:flex">
            <Link href="#projects" className="transition hover:text-fg">
              実績
            </Link>
            <Link href="#contact" className="transition hover:text-fg">
              連絡先
            </Link>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-3.5 py-1.5 text-[13px] font-medium text-white transition hover:bg-accent-hover"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-bg-elevated px-4 py-4 sm:hidden"
        >
          <ul className="flex flex-col gap-1 text-[15px]">
            <li>
              <Link
                href="#projects"
                className="block rounded-xl px-3 py-2.5 text-fg-secondary hover:bg-bg hover:text-fg"
                onClick={() => setMenuOpen(false)}
              >
                実績
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block rounded-xl px-3 py-2.5 text-fg-secondary hover:bg-bg hover:text-fg"
                onClick={() => setMenuOpen(false)}
              >
                連絡先
              </Link>
            </li>
            <li className="pt-2">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-accent px-4 py-2.5 text-center font-medium text-white"
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
