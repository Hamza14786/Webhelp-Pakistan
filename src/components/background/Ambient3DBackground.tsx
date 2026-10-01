import { useEffect, useRef } from "react";
import "./Ambient3DBackground.css";

// Deterministic particle configuration for balanced, luxury ambient depth
const PARTICLES = [
  { id: 1, top: "18%", left: "14%", size: 4, dur: "14s", delay: "0s", tx: 30, ty: -45, tz: 25 },
  { id: 2, top: "28%", left: "82%", size: 5, dur: "18s", delay: "-3s", tx: -35, ty: 50, tz: 35 },
  { id: 3, top: "45%", left: "22%", size: 3, dur: "16s", delay: "-7s", tx: 40, ty: 35, tz: 20 },
  { id: 4, top: "62%", left: "75%", size: 6, dur: "20s", delay: "-2s", tx: -45, ty: -40, tz: 40 },
  { id: 5, top: "78%", left: "30%", size: 4, dur: "15s", delay: "-9s", tx: 35, ty: -30, tz: 15 },
  { id: 6, top: "12%", left: "60%", size: 3, dur: "19s", delay: "-5s", tx: -25, ty: 45, tz: 30 },
  { id: 7, top: "85%", left: "88%", size: 5, dur: "22s", delay: "-11s", tx: -30, ty: -35, tz: 25 },
  { id: 8, top: "52%", left: "48%", size: 3, dur: "17s", delay: "-4s", tx: 25, ty: -50, tz: 20 },
  { id: 9, top: "36%", left: "6%", size: 4, dur: "21s", delay: "-8s", tx: 40, ty: 25, tz: 30 },
  { id: 10, top: "92%", left: "15%", size: 5, dur: "16s", delay: "-1s", tx: -20, ty: -40, tz: 15 },
];

export function Ambient3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check device preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchOnly = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = window.innerWidth <= 768;

    if (prefersReducedMotion || isTouchOnly || isMobile) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let clientX = window.innerWidth / 2;
    let clientY = window.innerHeight * 0.4;
    let rafId: number | null = null;
    let isMoving = false;

    const updateParallax = () => {
      // Smooth lerp damping for ultra-fluid movement
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      el.style.setProperty("--bg-mx", currentX.toFixed(4));
      el.style.setProperty("--bg-my", currentY.toFixed(4));

      const cxPercent = ((clientX / window.innerWidth) * 100).toFixed(2);
      const cyPercent = ((clientY / window.innerHeight) * 100).toFixed(2);
      el.style.setProperty("--bg-cx", `${cxPercent}%`);
      el.style.setProperty("--bg-cy", `${cyPercent}%`);

      // Keep animation loop alive if there is noticeable difference or user is moving cursor
      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001 || isMoving) {
        rafId = requestAnimationFrame(updateParallax);
      } else {
        rafId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;

      // Normalize coordinates: -1 to 1 range
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;

      isMoving = true;
      el.style.setProperty("--bg-cursor-opacity", "1");

      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    let stopTimeout: number | undefined;
    const handleMouseStop = () => {
      window.clearTimeout(stopTimeout);
      stopTimeout = window.setTimeout(() => {
        isMoving = false;
      }, 150);
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      el.style.setProperty("--bg-cursor-opacity", "0");
      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    const onPointerMove = (e: MouseEvent) => {
      handleMouseMove(e);
      handleMouseStop();
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.clearTimeout(stopTimeout);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="ambient-bg-wrapper"
      aria-hidden="true"
      style={
        {
          "--bg-mx": "0",
          "--bg-my": "0",
          "--bg-cx": "50%",
          "--bg-cy": "30%",
          "--bg-cursor-opacity": "0",
        } as React.CSSProperties
      }
    >
      {/* 1. Deep Layer: Expansive Cosmic Cyan & Sapphire Blooms */}
      <div className="ambient-plane ambient-plane-deep">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
      </div>

      {/* 2. Mid Layer: Volumetric 3D Light Beams & Shimmering Accent Orbs */}
      <div className="ambient-plane ambient-plane-mid">
        <div className="ambient-beam ambient-beam-1" />
        <div className="ambient-beam ambient-beam-2" />
        <div className="ambient-orb ambient-orb-3" />
        <div className="ambient-orb ambient-orb-4" />
      </div>

      {/* 3. Near Layer: Micro Bokeh Particles & Interactive Spotlight */}
      <div className="ambient-plane ambient-plane-near">
        <div className="ambient-cursor-spotlight" />
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="ambient-particle"
            style={
              {
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: p.dur,
                animationDelay: p.delay,
                "--p-tx": `${p.tx}px`,
                "--p-ty": `${p.ty}px`,
                "--p-tz": `${p.tz}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
