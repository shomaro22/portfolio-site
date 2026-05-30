"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export function Reveal({ children, className = "", delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(1.25rem)",
        transition: `opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
