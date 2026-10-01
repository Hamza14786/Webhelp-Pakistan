import { useEffect, useRef } from "react";
import type { BufferAttribute } from "three";

/**
 * Site-wide 3D Cosmic Cybernetic Background:
 * - Fluid undulating particle wave terrain (WebHelp turquoise/azure)
 * - Living Constellation Network (floating energy nodes connected by dynamic light lines)
 * - Ambient drifting stellar nodes
 * - Smooth lerped cursor parallax and scroll-depth camera navigation
 * - Ultra-lightweight buffer geometries with zero impact on page load / FPS
 * - Automatic pause on background tabs to conserve GPU
 */
export default function CosmicWaveField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (disposed || !el) return;

      // 1. Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 3.8, 10.5);
      camera.lookAt(0, -0.5, 0);

      // 2. High-Performance Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearAlpha(0);
      el.appendChild(renderer.domElement);

      const canvas = renderer.domElement;
      canvas.style.position = "absolute";
      canvas.style.inset = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.display = "block";
      canvas.style.pointerEvents = "none";

      // 3. Glowing Particle Texture
      const createParticleTexture = () => {
        const c = document.createElement("canvas");
        c.width = 64;
        c.height = 64;
        const ctx = c.getContext("2d");
        if (!ctx) return null;

        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.2, "rgba(37, 210, 221, 0.95)");
        grad.addColorStop(0.5, "rgba(18, 136, 211, 0.6)");
        grad.addColorStop(0.8, "rgba(0, 170, 255, 0.2)");
        grad.addColorStop(1, "rgba(3, 17, 25, 0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
      };

      const particleTexture = createParticleTexture();

      // 4. Undulating Cyber Wave Grid (Plane Points)
      const cols = 52;
      const rows = 52;
      const waveGeom = new THREE.PlaneGeometry(32, 32, cols, rows);
      waveGeom.rotateX(-Math.PI / 2);
      const wavePos = waveGeom.getAttribute("position");
      const baseWaveArray = Float32Array.from(wavePos.array);

      const waveMaterial = new THREE.PointsMaterial({
        color: new THREE.Color("#25d2dd"),
        size: 0.28,
        transparent: true,
        opacity: 0.75,
        map: particleTexture,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const wavePoints = new THREE.Points(waveGeom, waveMaterial);
      wavePoints.position.y = -2.4;
      scene.add(wavePoints);

      // Wireframe mesh beneath wave points for cybernetic depth
      const wireMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#1288d3"),
        wireframe: true,
        transparent: true,
        opacity: 0.16,
      });
      const waveMesh = new THREE.Mesh(waveGeom, wireMaterial);
      waveMesh.position.y = -2.4;
      scene.add(waveMesh);

      // 5. Dynamic Constellation Network (Floating Nodes + Connected Lines)
      const nodeCount = 55;
      const maxDistance = 5.2;
      const nodeGeom = new THREE.BufferGeometry();
      const nodePositions = new Float32Array(nodeCount * 3);
      const nodeVelocities = new Float32Array(nodeCount * 3);

      for (let i = 0; i < nodeCount; i++) {
        nodePositions[i * 3] = (Math.random() - 0.5) * 32;
        nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 18 + 0.5;
        nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 22;

        nodeVelocities[i * 3] = (Math.random() - 0.5) * 0.008;
        nodeVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
        nodeVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
      }

      nodeGeom.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));

      const nodeMaterial = new THREE.PointsMaterial({
        color: new THREE.Color("#00d4ff"),
        size: 0.35,
        transparent: true,
        opacity: 0.9,
        map: particleTexture,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const constellationNodes = new THREE.Points(nodeGeom, nodeMaterial);
      scene.add(constellationNodes);

      // Constellation Connecting Lines
      const maxLineSegments = (nodeCount * (nodeCount - 1)) / 2;
      const linePositions = new Float32Array(maxLineSegments * 6);
      const lineGeom = new THREE.BufferGeometry();
      lineGeom.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color("#25d2dd"),
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const constellationLines = new THREE.LineSegments(lineGeom, lineMaterial);
      scene.add(constellationLines);

      // 6. Deep Space Ambient Stardust
      const starCount = 200;
      const starGeom = new THREE.BufferGeometry();
      const starPositions = new Float32Array(starCount * 3);
      const starSpeeds = new Float32Array(starCount);

      for (let i = 0; i < starCount; i++) {
        starPositions[i * 3] = (Math.random() - 0.5) * 40;
        starPositions[i * 3 + 1] = (Math.random() - 0.5) * 24;
        starPositions[i * 3 + 2] = (Math.random() - 0.5) * 28;
        starSpeeds[i] = 0.15 + Math.random() * 0.35;
      }

      starGeom.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

      const starMaterial = new THREE.PointsMaterial({
        color: new THREE.Color("#38bdf8"),
        size: 0.2,
        transparent: true,
        opacity: 0.65,
        map: particleTexture,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const stars = new THREE.Points(starGeom, starMaterial);
      scene.add(stars);

      // 7. Responsive Resize
      const handleResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      handleResize();
      window.addEventListener("resize", handleResize, { passive: true });

      // 8. Mouse Tracking & Lerping
      let targetMouseX = 0;
      let targetMouseY = 0;
      let currentMouseX = 0;
      let currentMouseY = 0;

      const handlePointerMove = (e: MouseEvent) => {
        targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener("mousemove", handlePointerMove, { passive: true });

      // 9. Scroll Tracking
      let scrollPercent = 0;
      const handleScroll = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        scrollPercent = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });

      // 10. Tab Visibility
      let isVisible = !document.hidden;
      const handleVisibilityChange = () => {
        isVisible = !document.hidden;
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);

      // 11. Animation Loop
      let rafId = 0;
      const startTime = performance.now();

      const animate = () => {
        rafId = requestAnimationFrame(animate);
        if (!isVisible) return;

        const time = (performance.now() - startTime) * 0.0009;

        // Smooth mouse lerp
        currentMouseX += (targetMouseX - currentMouseX) * 0.04;
        currentMouseY += (targetMouseY - currentMouseY) * 0.04;

        // Animate Wave Plane
        for (let i = 0; i < wavePos.count; i++) {
          const x = baseWaveArray[i * 3] ?? 0;
          const z = baseWaveArray[i * 3 + 2] ?? 0;

          const y =
            Math.sin(x * 0.3 + time * 1.7) * 0.65 +
            Math.cos(z * 0.28 + time * 1.3) * 0.55 +
            Math.sin((x + z) * 0.18 + time * 0.8) * 0.3;

          wavePos.setY(i, y);
        }
        wavePos.needsUpdate = true;

        wavePoints.rotation.y = time * 0.035;
        waveMesh.rotation.y = wavePoints.rotation.y;

        // Update Constellation Nodes & Connecting Lines
        const nodeAttr = nodeGeom.getAttribute("position") as BufferAttribute;
        const nodeArr = nodeAttr.array as Float32Array;
        let lineVertexCount = 0;

        for (let i = 0; i < nodeCount; i++) {
          const ix = i * 3;
          const iy = i * 3 + 1;
          const iz = i * 3 + 2;

          nodeArr[ix]! += nodeVelocities[ix]!;
          nodeArr[iy]! += nodeVelocities[iy]!;
          nodeArr[iz]! += nodeVelocities[iz]!;

          // Bounce off bounds
          if (Math.abs(nodeArr[ix]!) > 16) nodeVelocities[ix]! *= -1;
          if (Math.abs(nodeArr[iy]!) > 9) nodeVelocities[iy]! *= -1;
          if (Math.abs(nodeArr[iz]!) > 12) nodeVelocities[iz]! *= -1;

          // Connect with nearby nodes
          for (let j = i + 1; j < nodeCount; j++) {
            const jx = j * 3;
            const jy = j * 3 + 1;
            const jz = j * 3 + 2;

            const dx = nodeArr[ix]! - nodeArr[jx]!;
            const dy = nodeArr[iy]! - nodeArr[jy]!;
            const dz = nodeArr[iz]! - nodeArr[jz]!;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < maxDistance) {
              const baseLineIdx = lineVertexCount * 3;
              linePositions[baseLineIdx] = nodeArr[ix]!;
              linePositions[baseLineIdx + 1] = nodeArr[iy]!;
              linePositions[baseLineIdx + 2] = nodeArr[iz]!;

              linePositions[baseLineIdx + 3] = nodeArr[jx]!;
              linePositions[baseLineIdx + 4] = nodeArr[jy]!;
              linePositions[baseLineIdx + 5] = nodeArr[jz]!;

              lineVertexCount += 2;
            }
          }
        }
        nodeAttr.needsUpdate = true;

        const linePosAttr = lineGeom.getAttribute("position") as BufferAttribute;
        linePosAttr.needsUpdate = true;
        lineGeom.setDrawRange(0, lineVertexCount);

        // Ambient stardust slow drift
        const starAttr = starGeom.getAttribute("position") as BufferAttribute;
        const starArr = starAttr.array as Float32Array;
        for (let i = 0; i < starCount; i++) {
          starArr[i * 3 + 1]! -= (starSpeeds[i] ?? 0.2) * 0.012;
          if (starArr[i * 3 + 1]! < -14) {
            starArr[i * 3 + 1] = 14;
          }
        }
        starAttr.needsUpdate = true;
        stars.rotation.y = -time * 0.015;

        // Camera positioning with scroll-depth and mouse parallax
        const scrollOffsetY = scrollPercent * 2.5;
        camera.position.x = currentMouseX * 1.5;
        camera.position.y = 3.8 - scrollOffsetY + currentMouseY * 0.7;
        camera.position.z = 10.5 - scrollPercent * 2.0;
        camera.lookAt(currentMouseX * 0.25, -0.5 - scrollOffsetY * 0.35, 0);

        renderer.render(scene, camera);
      };

      animate();

      // 12. Resource Cleanup
      cleanup = () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handlePointerMove);
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("visibilitychange", handleVisibilityChange);

        waveGeom.dispose();
        waveMaterial.dispose();
        wireMaterial.dispose();
        nodeGeom.dispose();
        nodeMaterial.dispose();
        lineGeom.dispose();
        lineMaterial.dispose();
        starGeom.dispose();
        starMaterial.dispose();
        particleTexture?.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
}
