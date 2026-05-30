"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { appleSpring } from "@/lib/motion";

type Props = {
  project: Project;
  variant?: "featured" | "compact" | "default";
  label?: string;
  className?: string;
};

export function ProjectCard({
  project,
  variant = "default",
  label,
  className = "",
}: Props) {
  const reduceMotion = useReducedMotion();
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={appleSpring}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-elevated shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${className}`}
    >
      <div
        className={
          isFeatured
            ? "flex flex-1 flex-col p-6 sm:p-8 md:p-10"
            : isCompact
              ? "flex flex-1 flex-col p-5 sm:p-6"
              : "flex flex-1 flex-col p-6 sm:p-7"
        }
      >
        {label && (
          <span className="mb-3 w-fit rounded-full bg-bg px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-fg-tertiary ring-1 ring-border">
            {label}
          </span>
        )}

        <h3
          className={
            isFeatured
              ? "text-2xl font-semibold tracking-tight text-fg sm:text-3xl md:text-4xl"
              : isCompact
                ? "text-xl font-semibold tracking-tight text-fg"
                : "text-xl font-semibold tracking-tight text-fg sm:text-2xl"
          }
        >
          {project.title}
        </h3>

        <p
          className={
            isFeatured
              ? "mt-3 flex-1 text-[15px] leading-relaxed text-fg-secondary sm:text-base md:mt-4"
              : "mt-2 flex-1 text-[14px] leading-relaxed text-fg-secondary sm:text-[15px]"
          }
        >
          {project.description}
        </p>

        {!isCompact && (
          <ul className="mt-4 space-y-2 text-[14px] text-fg-secondary">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-bg px-2.5 py-1 text-[11px] font-medium text-fg-tertiary ring-1 ring-border"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-accent-hover"
          >
            デモを見る
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[14px] font-medium text-accent transition hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
