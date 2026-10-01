import { lazy, Suspense, useEffect, useState } from "react";

const DeferredLottie = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((module) => ({ default: module.DotLottieReact })),
);

export function HeroRoleAnimation() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const idleId = window.requestIdleCallback?.(() => setReady(true), { timeout: 3000 });
    const timerId = idleId === undefined ? window.setTimeout(() => setReady(true), 2400) : undefined;

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      className="home-tech-hero-animation mx-auto w-full"
      role="img"
      aria-label="Our role in supporting your business"
    >
      {ready && (
        <Suspense fallback={null}>
          <DeferredLottie
            src="/animations/our-role.lottie"
            animationId="animation"
            autoplay
            loop
            backgroundColor="transparent"
            layout={{ fit: "contain", align: [0.5, 0.5] }}
            renderConfig={{ autoResize: true, freezeOnOffscreen: true }}
            className="block h-full w-full"
            style={{ width: "100%", height: "100%" }}
          />
        </Suspense>
      )}
    </div>
  );
}
