import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  variant?: "featured" | "default";
  label?: string;
  className?: string;
};

export function ProjectCard({
  project,
  variant = "default",
  label,
  className = "",
}: Props) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group flex h-full flex-col border border-border bg-surface p-5 transition duration-300 hover:border-accent/40 hover:shadow-[0_12px_40px_-16px_rgba(184,92,56,0.25)] sm:p-6 ${
        isFeatured ? "md:p-8 lg:p-10" : ""
      } ${className}`}
    >
      {label && (
        <span
          className={
            isFeatured
              ? "mb-4 w-fit border border-accent/30 bg-accent/10 px-3 py-1 font-serif text-xs tracking-wide text-accent"
              : "mb-3 w-fit border border-border px-2.5 py-0.5 text-xs font-medium text-muted"
          }
        >
          {label}
        </span>
      )}

      <h3
        className={
          isFeatured
            ? "font-serif text-2xl font-semibold text-ink sm:text-3xl lg:text-[2rem]"
            : "font-serif text-xl font-semibold text-ink sm:text-2xl"
        }
      >
        {project.title}
      </h3>

      <p
        className={
          isFeatured
            ? "mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base"
            : "mt-3 flex-1 text-sm leading-relaxed text-muted"
        }
      >
        {project.description}
      </p>

      <ul className={isFeatured ? "mt-5 space-y-2 text-sm text-ink/90" : "mt-4 space-y-1.5 text-sm text-ink/90"}>
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="border border-border bg-paper px-2.5 py-0.5 text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div
        className={
          isFeatured
            ? "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            : "mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap"
        }
      >
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-accent-hover"
        >
          デモを見る
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
