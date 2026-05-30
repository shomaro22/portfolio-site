import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsBento } from "@/components/ProjectsBento";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsBento />
      </main>
      <Footer />
    </>
  );
}
