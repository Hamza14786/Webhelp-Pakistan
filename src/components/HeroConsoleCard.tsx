import { memo } from "react";

export const HeroConsoleCard = memo(function HeroConsoleCard() {
  return (
    <div className="w-full max-w-[510px] rounded-[22px] border border-slate-800/90 bg-[#0b121e]/95 p-4 sm:p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(0,180,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-slate-700/90 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85),0_0_50px_rgba(0,200,255,0.14)]">
      {/* Console Window Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/70">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
          </div>
          <span className="font-mono text-xs font-medium text-slate-400 tracking-tight ml-1">
            webhelp-mesh-console v4.9
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Cluster
        </div>
      </div>

      {/* Top Stats: SLA Availability & SLA Response */}
      <div className="mt-3.5 grid grid-cols-2 gap-3">
        {/* SLA Availability */}
        <div className="rounded-xl border border-slate-800/80 bg-[#070d17]/85 p-3.5 sm:p-4">
          <span className="block text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase">
            SLA AVAILABILITY
          </span>
          <div className="mt-1 flex items-baseline">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              99.98
            </span>
            <span className="text-lg sm:text-xl font-bold text-cyan-400">%</span>
          </div>
          <div className="mt-2 flex items-center gap-1 text-[11px] sm:text-xs font-medium text-emerald-400">
            <span className="font-bold">↑</span>
            <span>Zero unplanned downtime</span>
          </div>
        </div>

        {/* SLA Response */}
        <div className="rounded-xl border border-slate-800/80 bg-[#070d17]/85 p-3.5 sm:p-4">
          <span className="block text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase">
            SLA RESPONSE
          </span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              &lt;12
            </span>
            <span className="text-base sm:text-lg font-semibold text-slate-300">
              min
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-400">
            <svg
              className="h-3.5 w-3.5 shrink-0 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="truncate">Priority Tier-1 Dispatch</span>
          </div>
        </div>
      </div>

      {/* Graph Section: Dedicated Engineering Pods */}
      <div className="mt-3 rounded-xl border border-slate-800/80 bg-[#070d17]/85 p-3.5 sm:p-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-slate-200 uppercase">
            DEDICATED ENGINEERING PODS
          </span>
          <span className="text-xs font-semibold text-[#00c8ff]">
            48 Active Engineers
          </span>
        </div>

        {/* SVG Wave Graph */}
        <div className="relative my-2.5 h-20 w-full sm:h-24">
          <svg
            className="h-full w-full overflow-visible"
            viewBox="0 0 420 90"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroWaveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.32" />
                <stop offset="65%" stopColor="#0099ff" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0088ff" stopOpacity="0.0" />
              </linearGradient>
              <filter id="heroWaveGlow" x="-10%" y="-15%" width="120%" height="130%">
                <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#00c8ff" floodOpacity="0.65" />
              </filter>
            </defs>

            {/* Gradient filled area under the curve */}
            <path
              d="M 5,56 C 45,56 75,53 115,55 C 160,58 200,48 245,28 C 275,16 295,15 320,38 C 345,62 355,80 375,76 C 390,72 402,34 415,14 L 415,90 L 5,90 Z"
              fill="url(#heroWaveGradient)"
            />

            {/* Glowing cyan stroke wave line */}
            <path
              d="M 5,56 C 45,56 75,53 115,55 C 160,58 200,48 245,28 C 275,16 295,15 320,38 C 345,62 355,80 375,76 C 390,72 402,34 415,14"
              fill="none"
              stroke="#00c8ff"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#heroWaveGlow)"
            />
          </svg>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-[#101b2a] px-2.5 py-1 text-[11px] font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            Full-Stack Web
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-[#101b2a] px-2.5 py-1 text-[11px] font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            Cloud Infrastructure
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-[#101b2a] px-2.5 py-1 text-[11px] font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            Managed SRE / SLA
          </span>
        </div>
      </div>

      {/* Bottom Footer: Average Enterprise Client Growth */}
      <div className="mt-3 flex items-center justify-between border-t border-slate-800/70 pt-3 px-1">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-950/30 text-cyan-400">
            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </span>
          <span className="text-xs sm:text-[13px] font-medium text-slate-300">
            Average Enterprise Client Growth
          </span>
        </div>
        <span className="text-base sm:text-lg font-bold text-emerald-400 tracking-tight">
          +245%
        </span>
      </div>
    </div>
  );
});
