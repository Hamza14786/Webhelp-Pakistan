import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

/**
 * Universal GSAP Animation & Interaction Controller:
 * - Immediate cinematic hero text reveals on page load & route transition
 * - Scroll-triggered section reveals and staggered card introductions
 * - Tactile magnetic pull micro-interactions on interactive buttons
 * - Interactive 3D perspective hover tilt on cards and panels
 * - Electric turquoise top scroll progress bar
 * - 100% Non-destructive: preserves existing layout & responsive flow
 * - Automatically pauses on reduced-motion preferences
 */
export function GsapController() {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let isDisposed = false;

    const startAnimations = () => void (async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      if (isDisposed) return;

      const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // --------------------------------------------------------------------
        // 1. Top Reading Scroll Progress Bar
        // --------------------------------------------------------------------
        const progressEl = progressBarRef.current;
        if (progressEl) {
          gsap.to(progressEl, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.15,
            },
          });
        }

        // --------------------------------------------------------------------
        // 2. Cinematic Hero Reveal on Page Load / Transition
        // --------------------------------------------------------------------
        const heroSection = document.querySelector<HTMLElement>(
          "section[data-site-hero], .hero-showcase, [data-hero]"
        );

        if (heroSection) {
          const heroBadge = heroSection.querySelector<HTMLElement>(
            ".hero-badge, span.rounded-full"
          );
          const heroH1 = heroSection.querySelector<HTMLElement>("h1");
          const heroParagraph = heroSection.querySelector<HTMLElement>(
            "p.hero-description, p.text-muted-foreground, p.text-base, p.text-lg"
          );
          const heroButtons = heroSection.querySelectorAll<HTMLElement>(
            "a, button, .hero-stat-card"
          );

          const heroTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            delay: 0.08,
          });

          if (heroBadge) {
            heroTimeline.fromTo(
              heroBadge,
              { opacity: 0, y: 18, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6 }
            );
          }

          if (heroH1) {
            heroTimeline.fromTo(
              heroH1,
              { opacity: 0, y: 35, filter: "blur(6px)" },
              { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85 },
              "-=0.4"
            );
          }

          if (heroParagraph) {
            heroTimeline.fromTo(
              heroParagraph,
              { opacity: 0, y: 22 },
              { opacity: 1, y: 0, duration: 0.7 },
              "-=0.5"
            );
          }

          if (heroButtons.length > 0) {
            heroTimeline.fromTo(
              heroButtons,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
              "-=0.4"
            );
          }
        }

        // --------------------------------------------------------------------
        // 3. ScrollTrigger Section Headings & Eyebrows
        // --------------------------------------------------------------------
        const headings = document.querySelectorAll<HTMLElement>(
          "main h2, main h3, main p.text-primary.uppercase, .section-heading"
        );

        headings.forEach((el) => {
          // Skip if inside hero section (already animated)
          if (el.closest("section[data-site-hero], .hero-showcase")) return;

          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: 28,
              filter: "blur(4px)",
            },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // --------------------------------------------------------------------
        // 4. Staggered Cascading Cards & Panels
        // --------------------------------------------------------------------
        const cardContainers = document.querySelectorAll<HTMLElement>(
          ".showcase-list, .bento-grid, .grid, [data-card-grid], .hero-stats"
        );

        cardContainers.forEach((container) => {
          // Skip if inside hero
          if (container.closest("section[data-site-hero], .hero-showcase")) return;

          const cards = container.querySelectorAll<HTMLElement>(
            ":scope > .showcase-item, :scope > .bento-card, :scope > .panel, :scope > .service-card, :scope > article, :scope > [data-card]"
          );

          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              {
                opacity: 0,
                y: 36,
                scale: 0.98,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: container,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });

        // --------------------------------------------------------------------
        // 5. Magnetic Button Micro-Interactions (Desktop)
        // --------------------------------------------------------------------
        const buttonHandlers: Array<{
          el: HTMLElement;
          move: (e: MouseEvent) => void;
          leave: () => void;
        }> = [];

        if (window.matchMedia("(min-width: 768px)").matches) {
          const magneticButtons = document.querySelectorAll<HTMLElement>(
            ".filter-pill, .browser-frame__icon-btn, .btn-launch-site, .project-cta-button, .modal-header__launch-btn, .browser-overlay-btn, a.bg-primary, button.bg-primary, header a[href*='contact']"
          );

          magneticButtons.forEach((btn) => {
            btn.setAttribute("data-magnetic", "true");

            const handleMouseMove = (e: MouseEvent) => {
              const rect = btn.getBoundingClientRect();
              const relX = e.clientX - rect.left - rect.width / 2;
              const relY = e.clientY - rect.top - rect.height / 2;

              gsap.to(btn, {
                x: relX * 0.28,
                y: relY * 0.28,
                duration: 0.2,
                ease: "power1.out",
                overwrite: "auto",
              });
            };

            const handleMouseLeave = () => {
              gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1.1, 0.45)",
                overwrite: "auto",
              });
            };

            btn.addEventListener("mousemove", handleMouseMove, { passive: true });
            btn.addEventListener("mouseleave", handleMouseLeave, { passive: true });

            buttonHandlers.push({
              el: btn,
              move: handleMouseMove,
              leave: handleMouseLeave,
            });
          });
        }

        // --------------------------------------------------------------------
        // 6. Interactive 3D Perspective Hover Tilt on Cards (Desktop)
        // --------------------------------------------------------------------
        if (window.matchMedia("(min-width: 1024px)").matches) {
          const tiltCards = document.querySelectorAll<HTMLElement>(
            ".showcase-item, .bento-card, .service-card, .panel, article[data-card], .hero-stat-card"
          );

          tiltCards.forEach((card) => {
            const handleCardMove = (e: MouseEvent) => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = ((y - centerY) / centerY) * -3.2;
              const rotateY = ((x - centerX) / centerX) * 3.2;

              gsap.to(card, {
                rotateX,
                rotateY,
                transformPerspective: 1000,
                duration: 0.3,
                ease: "power1.out",
                overwrite: "auto",
              });
            };

            const handleCardLeave = () => {
              gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.55,
                ease: "power2.out",
                overwrite: "auto",
              });
            };

            card.addEventListener("mousemove", handleCardMove, { passive: true });
            card.addEventListener("mouseleave", handleCardLeave, { passive: true });

            buttonHandlers.push({
              el: card,
              move: handleCardMove,
              leave: handleCardLeave,
            });
          });
        }

        return () => {
          buttonHandlers.forEach(({ el, move, leave }) => {
            el.removeEventListener("mousemove", move);
            el.removeEventListener("mouseleave", leave);
          });
        };
      });

      // Settle ScrollTrigger on DOM change
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 180);

      cleanup = () => {
        ctx.revert();
      };
    })();

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const idleId = idleWindow.requestIdleCallback?.(startAnimations, { timeout: 1800 });
    const timerId = idleId === undefined ? window.setTimeout(startAnimations, 1200) : undefined;

    return () => {
      isDisposed = true;
      if (idleId !== undefined) idleWindow.cancelIdleCallback?.(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
      cleanup?.();
    };
  }, [pathname]);

  return (
    <>
      {/* 3px Glowing Electric Turquoise Scroll Progress Indicator */}
      <div
        ref={progressBarRef}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none origin-left bg-gradient-to-r from-[#1288d3] via-[#25d2dd] to-[#00d4ff] shadow-[0_0_14px_rgba(37,210,221,0.85)]"
        style={{ transform: "scaleX(0)" }}
      />
    </>
  );
}
