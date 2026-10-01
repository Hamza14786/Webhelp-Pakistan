# WebHelp build and upload report — 2026-09-23

## Upload package

- Archive: `webhelp-dist-upload-2026-09-23.zip` (39.47 MB, 214 files).
- Upload-ready static directory: `dist/public/`.
- Full generated output, including the Node server: `dist/`.
- Existing dist was preserved under `scratch/dist-before-build-*`.
- The ZIP contains the contents of `dist/public` directly, including `index.html`, `.htaccess`, assets, images, and generated route pages. It does not require Node.js hosting.

## cPanel upload

1. Back up the existing website files and hosting configuration.
2. Upload the ZIP to the domain's document root (usually `public_html`).
3. Extract it there, replacing matching website files. `index.html`, `.htaccess`, and `assets/` must be directly inside the document root, not inside an extra dist folder.
4. Enable hidden-file display to confirm `.htaccess` was extracted. Review any existing custom .htaccess rules before replacing them.
5. Clear hosting/CDN cache, then check the homepage, a service page, and a directly opened nested product URL.

This package targets Apache/cPanel at the domain root. Apache routing itself and the live server were not tested locally.

## Verification

- `npm run build:static`: passed; all 36 configured routes generated successfully.
- Local Edge browser: all 36 routes returned HTTP 200 and displayed their headings.
- Local asset references in generated HTML: no missing files found; browser also reported no local HTTP resource errors during the route crawl.
- Homepage at 390px viewport: no horizontal overflow detected.
- Google Analytics ID G-SPP811W81V is present in all generated route pages; tracking delivery was not verified.
- Current favicon and Open Graph image are included.
- ZIP contents checked for root index.html, .htaccess, and JavaScript assets.

## Existing code findings

The build succeeded, but the source and browser checks are not fully clean. Application source was not changed during this build.

1. `src/routes/contact.tsx`: form submission only waits and displays success; it does not send or store an enquiry. It also accesses the event's currentTarget after an await, which can fail when resetting the form. Do not rely on this form for receiving leads.
2. `src/routes/login.tsx`: client and employee login display an unavailable message; no authentication backend is connected.
3. `/products/business-vps-hosting`: browser reported React hydration error #418. The page still displayed its heading. The cause has not been established or fixed.
4. TypeScript check: 50 existing diagnostics, including strict optional property types, indexed property access, and Three.js typing. Details: `scratch/typecheck-upload-20260923.log`.
5. Source lint: 1,234 errors (1,232 formatting findings and two empty-block findings), plus six React refresh warnings. Details: `scratch/lint-upload-20260923.json`.
6. The static generator logs fetch failures without failing the whole build. For this build, all expected routes were independently verified.
7. The VPS enquiry form opens WhatsApp with a prepared message; the visitor must send that message in WhatsApp.

Browser results: `scratch/upload-verification-20260923.json`.
Build log: `scratch/build-upload-20260923.log`.
Mobile screenshot: `scratch/upload-mobile-20260923.png`.
