"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: Fades out as we scroll past 20%
  const opacity1 = useTransform(progress, [0, 0.2], [1, 0]);
  const y1 = useTransform(progress, [0, 0.2], [0, 0]);

  // Section 2: Fades in at 25%, fully visible at 35%, fades out at 55%
  const opacity2 = useTransform(progress, [0.25, 0.35, 0.55], [0, 1, 0]);
  const y2 = useTransform(progress, [0.25, 0.35, 0.55], [50, 0, -50]);

  // Section 3: Fades in at 60%, stays fully visible through 100%
  const opacity3 = useTransform(progress, [0.6, 0.7, 0.9], [0, 1, 0]);
  const y3 = useTransform(progress, [0.6, 0.7, 0.9], [50, 0, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 text-white">
      {/* Section 1 (0% scroll): Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Ishan Mahida
        </h1>
        <p className="text-xl md:text-2xl font-light text-neutral-300">
          Creative Developer.
        </p>
      </motion.div>

      {/* Section 2 (30% scroll): Left Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-2xl">
          Building projects
          <br /> that blend tech
          <br /> with creativity.
        </h2>
      </motion.div>

      {/* Section 3 (60% scroll): Right Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-2xl">
          Aspiring BE IT grad. <br />
          MERN Stack Developer.
        </h2>
      </motion.div>
    </div>
  );
}
