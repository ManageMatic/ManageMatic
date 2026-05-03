"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  const opacity1 = useTransform(progress, [0, 0.15], [1, 0]);
  const y1 = useTransform(progress, [0, 0.15], [0, -30]);

  const opacity2 = useTransform(progress, [0.2, 0.3, 0.55], [0, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.3, 0.55], [40, 0, -40]);

  // No fade-out, no upward y movement on exit
  const opacity3 = useTransform(progress, [0.6, 0.72], [0, 1]);
  const y3 = useTransform(progress, [0.6, 0.72], [40, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 text-white">

      {/* Section 1 — center */}
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

      {/* Section 2 — left, bottom-half so it clears section 1 visually */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-8 md:px-24"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
          Building projects
          <br />that blend tech
          <br />with creativity.
        </h2>
      </motion.div>

      {/* Section 3 — fixed to bottom-right, NO y transform that pushes off-screen */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute bottom-16 right-0 left-0 flex flex-col items-end text-right px-6 sm:px-8 md:px-24"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
          Aspiring BE IT grad.
          <br />
          MERN Stack Developer.
        </h2>
      </motion.div>
    </div>
  );
}
