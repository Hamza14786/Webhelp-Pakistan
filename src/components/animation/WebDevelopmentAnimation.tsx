import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function WebDevelopmentAnimation() {
  return (
    <div
      className="mx-auto aspect-[26/25] w-full max-w-[560px] overflow-hidden border-0 bg-transparent"
      role="img"
      aria-label="Web development animation"
    >
      <DotLottieReact
        src="/animations/web-development-animation.lottie"
        animationId="948a0bef-e3bc-4597-b4ec-14021b196944"
        loop
        autoplay
        backgroundColor="transparent"
        layout={{ fit: "contain", align: [0.5, 0.5] }}
        renderConfig={{ autoResize: true, freezeOnOffscreen: true }}
        className="block h-full w-full border-0 bg-transparent"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
