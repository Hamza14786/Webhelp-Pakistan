// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    ssr: {
      // Transform Lucide's deep ESM imports before Node loads them during SSR.
      noExternal: ["lucide-react"],
    },
  },
  // cPanel's Node.js application manager runs the generated Nitro Node server.
  nitro: {
    preset: "node-server",
    routeRules: {
      "/assets/**": {
        headers: { "cache-control": "public, max-age=31536000, immutable" },
      },
      "/images/**": {
        headers: { "cache-control": "public, max-age=2592000, stale-while-revalidate=86400" },
      },
      "/animations/**": {
        headers: { "cache-control": "public, max-age=2592000, stale-while-revalidate=86400" },
      },
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
