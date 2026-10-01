import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
  /** Animate direct children individually instead of the wrapper. */
  childSelector?: string;
};

/** Content stays visible by default; viewport entry adds progressive motion. */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  y = 24,
  stagger = 0.08,
  childSelector,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = childSelector
      ? Array.from(el.querySelectorAll<HTMLElement>(childSelector))
      : [el];
    if (!targets.length) return;

    let animations: Animation[] = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        animations = targets.map((target, index) =>
          target.animate(
            [
              { opacity: 0, transform: `translate3d(0, ${y}px, 0)` },
              { opacity: 1, transform: "translate3d(0, 0, 0)" },
            ],
            {
              duration: 750,
              delay: (delay + (childSelector ? stagger * index : 0)) * 1000,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "none",
            },
          ),
        );
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [delay, y, stagger, childSelector]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
