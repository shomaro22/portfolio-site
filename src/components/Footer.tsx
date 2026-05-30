import { siteConfig } from "@/data/projects";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          連絡先
        </h2>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
          お仕事のご相談・技術的なご質問は GitHub からお気軽にどうぞ。
        </p>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-[15px] font-medium text-accent hover:underline"
        >
          {siteConfig.githubUrl}
          <span aria-hidden>↗</span>
        </a>
        <p className="mt-10 text-[12px] text-fg-tertiary">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
