import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900">実績</h2>
          <p className="mt-2 text-slate-600">
            本番環境で動作しているプロジェクトです。デモサイトから実際の画面を確認できます。
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
