"use client";

import { motion, useReducedMotion } from "framer-motion";
import { featuredProject, subProjects } from "@/data/projects";
import { appleEase, fadeUp, staggerContainer } from "@/lib/motion";
import { ProjectCard } from "./ProjectCard";

export function ProjectsBento() {
  const reduceMotion = useReducedMotion();
  const attendance = subProjects.find((p) => p.id === "attendance-app");
  const oauth = subProjects.find((p) => p.id === "oauth-server");

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} transition={appleEase}>
          <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl">
            実績
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-fg-secondary sm:text-lg">
            本番環境で動作しているプロジェクト。タップしてデモへ。
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-12 lg:gap-5">
          <motion.div
            variants={fadeUp}
            transition={appleEase}
            className="lg:col-span-12"
          >
            <ProjectCard
              project={featuredProject}
              variant="featured"
              label="メイン"
              className="min-h-[320px] sm:min-h-[360px]"
            />
          </motion.div>

          {attendance && (
            <motion.div
              variants={fadeUp}
              transition={{ ...appleEase, delay: 0.05 }}
              className="lg:col-span-7"
            >
              <ProjectCard
                project={attendance}
                label="サブ"
                className="min-h-[280px]"
              />
            </motion.div>
          )}

          {oauth && (
            <motion.div
              variants={fadeUp}
              transition={{ ...appleEase, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <ProjectCard
                project={oauth}
                variant="compact"
                className="min-h-[280px]"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
