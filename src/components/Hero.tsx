import { featuredProject, siteConfig } from "@/data/projects";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -right-16 top-8 h-48 w-48 rounded-full bg-accent/10 blur-3xl dark:bg-accent/15 sm:h-64 sm:w-64" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-accent-soft/15 blur-3xl sm:h-56 sm:w-56" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm">
            Portfolio — Web Engineer
          </p>
          <div className="mt-5 h-px w-16 bg-[var(--line-grow)] animate-line-grow sm:w-24" />
          <h1 className="mt-6 max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl md:leading-[1.15]">
            {siteConfig.name}
          </h1>
        </Reveal>

        <Reveal delayMs={120}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Next.js / TypeScript を中心に、バックエンド API・DB・CI/CD・クラウドデプロイまで対応します。
            掲載の実績はすべて本番 URL で動作確認できます。
          </p>
        </Reveal>

        <Reveal delayMs={220}>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href={featuredProject.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent-hover"
            >
              {featuredProject.title} のデモ
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-sm border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
            >
              実績を見る
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-ink px-6 py-3 text-sm font-medium text-ink transition hover:bg-ink hover:text-paper"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
