"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const progress = useMotionValue(0);

  useEffect(() => {
    // Preload images
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      imagesRef.current[i] = img;
    }

    // Draw first frame
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const img = imagesRef.current[0];
      if (img) {
        const draw = () => renderImage(img, canvas, ctx);
        img.complete ? draw() : (img.onload = draw);
      }
    }

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // How far we've scrolled INTO the container (from 0 to containerHeight)
      const scrolled = -rect.top;
      // Total scrollable distance = containerHeight - viewportHeight
      const total = containerHeight - viewportHeight;
      const p = Math.min(Math.max(scrolled / total, 0), 1);
      progress.set(p);

      // Draw frame
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const imgIndex = Math.round(p * (FRAME_COUNT - 1));
      const img = imagesRef.current[imgIndex];
      if (canvas && ctx && img?.complete) {
        renderImage(img, canvas, ctx);
      }
    };

    const handleResize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const imgIndex = Math.round(progress.get() * (FRAME_COUNT - 1));
      const img = imagesRef.current[imgIndex];
      if (canvas && ctx && img?.complete) renderImage(img, canvas, ctx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [progress]);

  const renderImage = (
    img: HTMLImageElement,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    const w = window.visualViewport?.width ?? window.innerWidth;
    const h = window.visualViewport?.height ?? window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  return (
    <div
      ref={containerRef}
      style={{ height: "300dvh", position: "relative" }}
      className="bg-[#121212]"
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <Overlay progress={progress} />
      </div>
    </div>
  );
}
