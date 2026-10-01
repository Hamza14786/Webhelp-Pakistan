import { useEffect, useRef } from "react";

/**
 * Strategic Three.js visual: a slowly rotating wireframe wave lattice.
 * Client-only (mounted via <ClientVisual/>), pauses off-screen, and never
 * initialises when the visitor prefers reduced motion.
 */
export default function WaveField({ density = 44 }: { density?: number }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (disposed || !el) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.set(0, 3.2, 8.5);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearAlpha(0);
      el.appendChild(renderer.domElement);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";

      const geometry = new THREE.PlaneGeometry(18, 18, density, density);
      geometry.rotateX(-Math.PI / 2);
      const pos = geometry.getAttribute("position");
      const base = Float32Array.from(pos.array);

      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
          color: new THREE.Color("#1288d3"),
          wireframe: true,
          transparent: true,
          opacity: 0.28,
        }),
      );
      scene.add(mesh);

      const dots = new THREE.Points(
        geometry,
        new THREE.PointsMaterial({
          color: new THREE.Color("#60a5fa"),
          size: 0.055,
          transparent: true,
          opacity: 0.6,
        }),
      );
      scene.add(dots);

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);

      let visible = true;
      const io = new IntersectionObserver((entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      });
      io.observe(el);

      let raf = 0;
      const start = performance.now();

      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible) return;
        const t = (performance.now() - start) / 1000;
        for (let i = 0; i < pos.count; i++) {
          const x = base[i * 3] ?? 0;
          const z = base[i * 3 + 2] ?? 0;
          pos.setY(i, Math.sin(x * 0.45 + t * 0.7) * 0.42 + Math.cos(z * 0.38 - t * 0.5) * 0.42);
        }
        pos.needsUpdate = true;
        mesh.rotation.y = Math.sin(t * 0.06) * 0.18;
        dots.rotation.y = mesh.rotation.y;
        renderer.render(scene, camera);
      };
      tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        geometry.dispose();
        (mesh.material as { dispose(): void }).dispose();
        (dots.material as { dispose(): void }).dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [density]);

  return <div ref={host} aria-hidden="true" className="absolute inset-0" />;
}
