import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md">
      <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>
      <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
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
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          デモを見る
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
