import { siteConfig } from "@/data/projects";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-lg font-semibold text-slate-900">連絡先</h2>
        <p className="mt-2 text-slate-600">
          お仕事のご相談・技術的なご質問は GitHub からお気軽にどうぞ。
        </p>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-medium text-indigo-600 hover:text-indigo-800"
        >
          {siteConfig.githubUrl}
        </a>
        <p className="mt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
