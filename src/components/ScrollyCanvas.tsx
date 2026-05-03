"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 0 -> 1 progress to 0 -> 119 frames
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        imagesRef.current[i] = img;
      }
    };

    preloadImages();

    // Draw initial frame
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (canvas && context && imagesRef.current[0]) {
      const img = imagesRef.current[0];
      img.onload = () => {
        renderImage(img, canvas, context);
      };
    }

    const handleResize = () => {
      if (canvas && imagesRef.current[frameIndex.get()]) {
        renderImage(
          imagesRef.current[Math.round(frameIndex.get())],
          canvas,
          canvas.getContext("2d")!
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const imgIndex = Math.round(latest);
    const img = imagesRef.current[imgIndex];
    if (canvas && context && img && img.complete) {
      renderImage(img, canvas, context);
    }
  });

  const renderImage = (
    img: HTMLImageElement,
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ) => {
    // Make sure canvas matches window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // object-fit: cover logic
    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  return (
    <div ref={containerRef} className="relative bg-[#121212]" style={{ height: "1500vh" }}>
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-[100dvh] block" />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
