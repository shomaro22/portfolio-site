/** Framer Motion: reduced motion 時はアニメーションを無効化 */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const appleSpring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
};

export const appleEase = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};
