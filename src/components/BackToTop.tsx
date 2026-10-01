import ArrowUp from "lucide-react/dist/esm/icons/arrow-up";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 420);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      title="Back to top"
      className={`group fixed right-4 bottom-5 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-primary/65 bg-[#061b29]/90 text-white shadow-[0_12px_38px_rgba(0,0,0,0.4),0_0_28px_rgba(18,136,211,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#54c8ff] hover:bg-primary hover:shadow-[0_16px_42px_rgba(0,0,0,0.45),0_0_34px_rgba(18,136,211,0.6)] focus-visible:opacity-100 sm:right-6 sm:bottom-7 ${
        visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-5 scale-75 opacity-0"
      }`}
    >
      <span className="absolute inset-1 rounded-full border border-white/10" aria-hidden="true" />
      <ArrowUp className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
    </button>
  );
}
