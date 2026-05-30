import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { featuredProject, subProjects } from "@/data/projects";

export default function Home() {
  const attendance = subProjects.find((p) => p.id === "attendance-app");
  const oauth = subProjects.find((p) => p.id === "oauth-server");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="projects" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-soft dark:text-accent-soft">
              Works
            </p>
            <div className="mt-3 h-px w-12 bg-accent animate-line-grow" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-ink sm:text-3xl">
              実績
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              本番環境で動作しているプロジェクトです。デモサイトから実際の画面を確認できます。
            </p>
          </Reveal>

          <Reveal delayMs={80} className="mt-10 md:mt-12">
            <ProjectCard
              project={featuredProject}
              variant="featured"
              label="メイン"
            />
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-5 md:gap-6 lg:gap-8">
            {attendance && (
              <Reveal delayMs={120} className="md:col-span-3">
                <ProjectCard project={attendance} label="サブ" className="h-full" />
              </Reveal>
            )}
            {oauth && (
              <Reveal delayMs={180} className="md:col-span-2">
                <ProjectCard project={oauth} className="h-full" />
              </Reveal>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
