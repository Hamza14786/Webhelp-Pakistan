import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Ambient3DBackground } from "@/components/background/Ambient3DBackground";
import { CustomCursor } from "@/components/cursor/CustomCursor";

const GOOGLE_ANALYTICS_ID = "G-SPP811W81V";
const GOOGLE_FONTS_STYLESHEET =
  "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Nunito+Sans:wght@400;500;600;700;800;900&display=optional";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "WebHelp Pakistan | IT Solutions & Web Development" },
      {
        name: "description",
        content:
          "Webhelp Pakistan provides web development, managed IT support, hosting, ecommerce, integrations and dedicated remote teams for businesses in Pakistan and worldwide.",
      },
      { name: "author", content: "Webhelp Pakistan" },
      { property: "og:site_name", content: "Webhelp Pakistan" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://www.webhelp.pk/webhelp-og-image.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Webhelp Pakistan logo",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://www.webhelp.pk/webhelp-og-image.jpg",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/webhelp-favicon-transparent.png?v=6",
        type: "image/png",
        sizes: "192x192",
      },
      { rel: "shortcut icon", href: "/favicon.ico?v=6", type: "image/x-icon" },
      {
        rel: "apple-touch-icon",
        href: "/webhelp-favicon-transparent.png?v=6",
        sizes: "192x192",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link
          id="google-fonts-preload"
          rel="preload"
          as="style"
          href={GOOGLE_FONTS_STYLESHEET}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { const link = document.getElementById('google-fonts-preload'); if (!link) return; const apply = () => { link.rel = 'stylesheet'; link.removeAttribute('as'); }; link.addEventListener('load', apply, { once: true }); if (link.sheet) apply(); })();`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={GOOGLE_FONTS_STYLESHEET} />
        </noscript>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ANALYTICS_ID}');`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
        <Ambient3DBackground />
        <Header />
        <main id="main" className="relative z-10 flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
        <CustomCursor />
      </div>
    </QueryClientProvider>
  );
}
