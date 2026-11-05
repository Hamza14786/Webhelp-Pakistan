import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const serverEntry = join(projectRoot, ".output", "server", "index.mjs");
const staticRoot = join(projectRoot, "dist");
const publicRoot = join(projectRoot, ".output", "public");

const seedRoutes = [
  "/",
  "/about",
  "/contact",
  "/flow-chart",
  "/industries",
  "/login",
  "/our-process",
  "/ourprocess",
  "/privacy",
  "/terms",
  "/work",
  "/products/",
  "/services/",
  "/umaira-ashfaq",
  "/Muhammad-Bilal",
  "/sumayya-rasheed",
  "/Hamza",
  "/riaz-shah",
  "/raja-jahangir",
  "/raja-muhammad-imran",
  "/umer-shahbaz",
  "/hasnat-ali",
  "/saqib-rasheed",
];

const port = await getAvailablePort();
const baseUrl = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, [serverEntry], {
  cwd: projectRoot,
  env: { ...process.env, NITRO_HOST: "127.0.0.1", NITRO_PORT: String(port) },
  stdio: ["ignore", "ignore", "pipe"],
});

let serverErrors = "";
server.stderr.setEncoding("utf8");
server.stderr.on("data", (chunk) => {
  serverErrors += chunk;
});

try {
  await waitForServer();
  await rm(staticRoot, { recursive: true, force: true });
  await mkdir(staticRoot, { recursive: true });
  await cp(publicRoot, staticRoot, { recursive: true });

  const pendingRoutes = [...seedRoutes];
  const visitedRoutes = new Set();
  const routeFailures = [];

  while (pendingRoutes.length > 0) {
    const route = pendingRoutes.shift();
    const normalizedRoute = normalizeRoute(route);
    if (visitedRoutes.has(normalizedRoute)) continue;
    visitedRoutes.add(normalizedRoute);

    const response = await fetch(new URL(normalizedRoute, baseUrl), {
      headers: { accept: "text/html" },
    });
    const contentType = response.headers.get("content-type") ?? "";
    if (!response.ok || !contentType.includes("text/html")) {
      routeFailures.push(`${normalizedRoute}: ${response.status} ${contentType}`);
      continue;
    }

    const html = await response.text();
    if (!html.includes("<html") || !html.includes("</html>")) {
      routeFailures.push(`${normalizedRoute}: response is not a complete HTML document`);
      continue;
    }

    const destination = routeToFile(normalizedRoute);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, html, "utf8");

    for (const linkedRoute of findInternalLinks(html, baseUrl)) {
      const candidate = normalizeRoute(linkedRoute);
      if (!visitedRoutes.has(candidate)) pendingRoutes.push(candidate);
    }
  }

  if (routeFailures.length > 0) {
    throw new Error(`Failed to render routes:\n${routeFailures.join("\n")}`);
  }

  const homeHtml = await readFile(join(staticRoot, "index.html"), "utf8");
  if (!homeHtml.includes("G-SPP811W81V")) {
    throw new Error("Google Analytics ID was not found in rendered homepage HTML");
  }

  await writeFile(
    join(staticRoot, ".htaccess"),
    [
      "Options -MultiViews",
      "DirectoryIndex index.html",
      "<IfModule mod_rewrite.c>",
      "  RewriteEngine On",
      "  RewriteBase /",
      "  RewriteRule ^muhammad-bilal-raja/?$ /Muhammad-Bilal [R=301,L]",
      "  RewriteRule ^hamza-malik/?$ /Hamza [R=301,L]",
      "  RewriteRule ^team/muhammad-bilal-raja/?$ /Muhammad-Bilal [R=301,L]",
      "  RewriteRule ^team/hamza-malik/?$ /Hamza [R=301,L]",
      "  RewriteRule ^team/(.+)/?$ /$1/ [R=301,L]",
      "  RewriteCond %{REQUEST_FILENAME} -f [OR]",
      "  RewriteCond %{REQUEST_FILENAME} -d",
      "  RewriteRule ^ - [L]",
      "  RewriteRule ^ index.html [L]",
      "</IfModule>",
      "",
    ].join("\n"),
    "utf8",
  );

  console.log(`Rendered ${visitedRoutes.size} internal routes into ${staticRoot}`);
} catch (error) {
  if (serverErrors.trim()) console.error(serverErrors.trim());
  throw error;
} finally {
  server.kill();
}

async function getAvailablePort() {
  const listener = createServer();
  await new Promise((resolveListen, rejectListen) => {
    listener.once("error", rejectListen);
    listener.listen(0, "127.0.0.1", resolveListen);
  });
  const address = listener.address();
  if (!address || typeof address === "string") {
    listener.close();
    throw new Error("Could not allocate a local port for the production server");
  }
  await new Promise((resolveClose, rejectClose) =>
    listener.close((error) => (error ? rejectClose(error) : resolveClose())),
  );
  return address.port;
}

async function waitForServer() {
  const deadline = Date.now() + 30_000;
  let lastError;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Production server exited early with code ${server.exitCode}`);
    }
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolveWait) => setTimeout(resolveWait, 250));
  }
  throw new Error(`Production server did not start within 30 seconds: ${lastError ?? "no response"}`);
}

function normalizeRoute(route) {
  const pathname = new URL(route, baseUrl).pathname;
  const decoded = decodeURIComponent(pathname);
  if (decoded.split("/").some((part) => part === "." || part === "..")) {
    throw new Error(`Unsafe route path: ${route}`);
  }
  if (decoded === "/") return "/";
  return decoded.replace(/\/+$/, "");
}

function routeToFile(route) {
  const relativePath = route === "/" ? "index.html" : `${route.slice(1)}/index.html`;
  const destination = resolve(staticRoot, relativePath);
  if (!destination.startsWith(`${staticRoot}${sep}`) && destination !== join(staticRoot, "index.html")) {
    throw new Error(`Route escaped static output directory: ${route}`);
  }
  return destination;
}

function findInternalLinks(html, origin) {
  const routes = [];
  for (const match of html.matchAll(/<a\b[^>]*\bhref\s*=\s*(["'])(.*?)\1/gi)) {
    const rawHref = match[2]?.replaceAll("&amp;", "&");
    if (!rawHref) continue;
    let url;
    try {
      url = new URL(rawHref, origin);
    } catch {
      continue;
    }
    if (url.origin !== origin || url.pathname.includes(".")) continue;
    routes.push(url.pathname);
  }
  return routes;
}
