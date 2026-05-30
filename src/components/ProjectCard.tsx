import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  variant?: "featured" | "default";
  label?: string;
};

export function ProjectCard({ project, variant = "default", label }: Props) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={
        isFeatured
          ? "flex flex-col rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-white to-indigo-50/80 p-8 shadow-md ring-1 ring-indigo-100 transition hover:border-indigo-300 hover:shadow-lg"
          : "flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
      }
    >
      {label && (
        <span
          className={
            isFeatured
              ? "mb-3 w-fit rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
              : "mb-2 w-fit rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
          }
        >
          {label}
        </span>
      )}
      <h3
        className={
          isFeatured
            ? "text-2xl font-bold text-slate-900 md:text-3xl"
            : "text-xl font-semibold text-slate-900"
        }
      >
        {project.title}
      </h3>
      <p
        className={
          isFeatured
            ? "mt-4 flex-1 text-base leading-relaxed text-slate-600"
            : "mt-3 flex-1 text-sm leading-relaxed text-slate-600"
        }
      >
        {project.description}
      </p>
      <ul
        className={
          isFeatured ? "mt-5 space-y-2 text-sm text-slate-700" : "mt-4 space-y-1.5 text-sm text-slate-700"
        }
      >
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-indigo-500" aria-hidden>
              •
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>
      <div className={isFeatured ? "mt-8 flex flex-wrap gap-3" : "mt-6 flex flex-wrap gap-3"}>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isFeatured
              ? "inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
              : "inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          }
        >
          デモを見る
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isFeatured
              ? "inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              : "inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          }
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
