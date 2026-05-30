import { siteConfig } from "@/data/projects";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          {siteConfig.tagline}
        </p>
        <p className="mt-4 max-w-xl text-slate-600">
          Next.js / TypeScript を中心に、バックエンド API・DB・CI/CD・クラウドデプロイまで対応します。
          以下の実績はすべて本番 URL で動作確認できます。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            実績を見る
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
