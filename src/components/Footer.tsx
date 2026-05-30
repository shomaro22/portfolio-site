import { siteConfig } from "@/data/projects";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Contact
          </p>
          <div className="mt-3 h-px w-12 bg-accent" />
          <h2 className="mt-4 font-serif text-xl font-semibold text-ink sm:text-2xl">
            連絡先
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            お仕事のご相談・技術的なご質問は GitHub からお気軽にどうぞ。
          </p>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-medium text-accent transition hover:text-accent-hover sm:text-base"
          >
            {siteConfig.githubUrl}
          </a>
          <p className="mt-10 text-xs text-muted sm:text-sm">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
