"use client";

import { motion, useReducedMotion } from "framer-motion";
import { featuredProject, siteConfig } from "@/data/projects";
import { appleEase, fadeUp } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,113,227,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(41,151,255,0.18),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 md:pt-24 lg:px-8">
        <motion.p
          initial={reduceMotion ? false : fadeUp.hidden}
          animate={fadeUp.visible}
          transition={appleEase}
          className="text-xs font-medium tracking-wide text-accent sm:text-sm"
        >
          Web Engineer Portfolio
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : fadeUp.hidden}
          animate={fadeUp.visible}
          transition={{ ...appleEase, delay: 0.06 }}
          className="mt-4 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : fadeUp.hidden}
          animate={fadeUp.visible}
          transition={{ ...appleEase, delay: 0.12 }}
          className="mt-5 max-w-2xl text-lg font-medium text-fg-secondary sm:text-xl md:text-2xl md:leading-snug"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : fadeUp.hidden}
          animate={fadeUp.visible}
          transition={{ ...appleEase, delay: 0.18 }}
          className="mt-4 max-w-xl text-[15px] leading-relaxed text-fg-tertiary sm:text-base"
        >
          Next.js / TypeScript を中心に、API・DB・CI/CD・クラウドまで一貫して構築。
          掲載プロジェクトはすべて本番で稼働中です。
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : fadeUp.hidden}
          animate={fadeUp.visible}
          transition={{ ...appleEase, delay: 0.24 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a
            href={featuredProject.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition hover:bg-accent-hover"
          >
            {featuredProject.title} を見る
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-1 rounded-full px-6 py-3 text-[15px] font-medium text-accent transition hover:underline"
          >
            実績を見る
            <span aria-hidden>›</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
