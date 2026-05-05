"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: visible at start, fades out by 40%
  const opacity1 = useTransform(progress, [0, 0.40], [1, 0]);
  const y1 = useTransform(progress, [0, 0.40], [0, -40]);

  // Section 2: fades in at 50%, fully visible at 65%, stays till end
  const opacity2 = useTransform(progress, [0.50, 0.65], [0, 1]);
  const y2 = useTransform(progress, [0.50, 0.65], [40, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 text-white">

      {/* Section 1 — Name, center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-3">
          Ishan Mahida
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-300">
          Creative Developer.
        </p>
      </motion.div>

      {/* Section 2 — Tagline, right aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-x-0 bottom-16 flex flex-col items-center text-center px-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
          Full-Stack Developer.
          <br />
          Crafting digital experiences.
        </h2>
      </motion.div>
    </div>
  );
}
