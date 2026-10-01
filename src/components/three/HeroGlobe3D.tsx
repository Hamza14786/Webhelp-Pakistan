import { useEffect, useRef } from "react";
import type { Mesh, Material } from "three";
import "./HeroGlobe3D.css";

export function HeroGlobe3D() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compact = window.matchMedia("(max-width: 768px)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      ?.saveData;
    if (reducedMotion || compact || saveData) return;

    let disposed = false;
    let frame = 0;
    let visible = true;
    let cleanup = () => {};

    const start = () => void (async () => {
      const THREE = await import("three");
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
      camera.position.z = 8.6;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !compact,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1.25 : 1.75));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      const world = new THREE.Group();
      const network = new THREE.Group();
      scene.add(world);
      world.add(network);

      const texture = await new THREE.TextureLoader().loadAsync("/images/home-global-network.png");
      if (disposed) {
        texture.dispose();
        renderer.dispose();
        return;
      }
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());

      // Perfectly scaled globe plane (fits inside camera view without edge clipping)
      const globeGeometry = new THREE.PlaneGeometry(5.1, 5.1);
      const globeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.02,
        depthWrite: true,
        toneMapped: false,
      });
      const globe = new THREE.Mesh(globeGeometry, globeMaterial);
      globe.renderOrder = 1;
      world.add(globe);

      // Atmospheric glowing halo ring
      const haloGeometry = new THREE.RingGeometry(2.32, 2.7, 96);
      const haloMaterial = new THREE.MeshBasicMaterial({
        color: 0x16bfff,
        transparent: true,
        opacity: 0.14,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const halo = new THREE.Mesh(haloGeometry, haloMaterial);
      halo.position.z = -0.1;
      world.add(halo);

      // Orbital arcs with animated data pulses
      const arcs: Mesh[] = [];
      const pulses: { mesh: Mesh; arc: Mesh; speed: number; offset: number; radius: number }[] = [];
      const arcCount = compact ? 5 : 9;

      for (let i = 0; i < arcCount; i += 1) {
        const radius = 2.45 + (i % 3) * 0.14;
        const geometry = new THREE.TorusGeometry(
          radius,
          compact ? 0.008 : 0.012,
          5,
          96,
          Math.PI * (1.12 + (i % 2) * 0.35)
        );
        const material = new THREE.MeshBasicMaterial({
          color: i % 3 === 0 ? 0x7be7ff : 0x009cff,
          transparent: true,
          opacity: 0.26 + (i % 3) * 0.07,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const arc = new THREE.Mesh(geometry, material);
        arc.rotation.set((i * 0.61) % Math.PI, (i * 0.83) % Math.PI, (i * 1.17) % Math.PI);
        network.add(arc);
        arcs.push(arc);

        // Signal packet pulse
        const pulse = new THREE.Mesh(
          new THREE.SphereGeometry(compact ? 0.032 : 0.046, 8, 8),
          new THREE.MeshBasicMaterial({
            color: 0xc8f7ff,
            transparent: true,
            opacity: 0.95,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          })
        );
        arc.add(pulse);
        pulses.push({ mesh: pulse, arc, speed: 0.16 + i * 0.016, offset: i / arcCount, radius });
      }

      // Constellation network nodes
      const nodeGeometry = new THREE.SphereGeometry(compact ? 0.026 : 0.038, 8, 8);
      const nodes: Mesh[] = [];
      const nodeCount = compact ? 12 : 24;
      for (let i = 0; i < nodeCount; i += 1) {
        const material = new THREE.MeshBasicMaterial({
          color: i % 4 === 0 ? 0xffffff : 0x39c9ff,
          transparent: true,
          opacity: 0.45 + (i % 4) * 0.14,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const node = new THREE.Mesh(nodeGeometry, material);
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        node.position.setFromSphericalCoords(2.26, phi, theta);
        network.add(node);
        nodes.push(node);
      }

      // Orbital stardust particles
      const particleCount = compact ? 40 : 80;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i += 1) {
        const r = 2.8 + Math.random() * 1.1;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        particlePositions[i * 3 + 1] = r * Math.cos(phi);
        particlePositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x42cfff,
        size: compact ? 0.018 : 0.026,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      world.add(particles);

      // --- Interactive State ---
      let isDragging = false;
      let prevPointerX = 0;
      let prevPointerY = 0;
      let dragVelocityX = 0;
      let dragVelocityY = 0;
      let manualRotX = 0;
      let manualRotY = 0;
      let targetTiltX = 0;
      let targetTiltY = 0;
      let hoverFactor = 0;
      let isHovered = false;
      let continuousSpinAngle = 0;

      // Pointer event handlers for drag, hover, and inertia
      const onPointerDown = (e: PointerEvent) => {
        isDragging = true;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
        dragVelocityX = 0;
        dragVelocityY = 0;
        try {
          host.setPointerCapture(e.pointerId);
        } catch {}
        host.style.cursor = "grabbing";
      };

      const onPointerMove = (e: PointerEvent) => {
        const bounds = host.getBoundingClientRect();
        const relX = (e.clientX - bounds.left) / bounds.width - 0.5;
        const relY = (e.clientY - bounds.top) / bounds.height - 0.5;

        // Subtle perspective tilt toward pointer
        targetTiltY = relX * 0.38;
        targetTiltX = -relY * 0.28;

        if (isDragging) {
          const deltaX = e.clientX - prevPointerX;
          const deltaY = e.clientY - prevPointerY;
          prevPointerX = e.clientX;
          prevPointerY = e.clientY;

          dragVelocityY = deltaX * 0.007;
          dragVelocityX = deltaY * 0.007;

          manualRotY += dragVelocityY;
          manualRotX += dragVelocityX;
        }
      };

      const onPointerUp = (e: PointerEvent) => {
        if (isDragging) {
          isDragging = false;
          try {
            host.releasePointerCapture(e.pointerId);
          } catch {}
          host.style.cursor = "grab";
        }
      };

      const onPointerEnter = () => {
        isHovered = true;
      };

      const onPointerLeave = () => {
        isHovered = false;
        targetTiltX = 0;
        targetTiltY = 0;
        if (isDragging) {
          isDragging = false;
          host.style.cursor = "grab";
        }
      };

      // Also listen to parent hero section to react to cursor proximity
      const parentHero = host.parentElement;
      const onParentPointerMove = (e: PointerEvent) => {
        if (!isHovered && parentHero) {
          const bounds = parentHero.getBoundingClientRect();
          const relX = (e.clientX - bounds.left) / bounds.width - 0.5;
          const relY = (e.clientY - bounds.top) / bounds.height - 0.5;
          targetTiltY = relX * 0.2;
          targetTiltX = -relY * 0.15;
        }
      };

      host.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerup", onPointerUp);
      host.addEventListener("pointerenter", onPointerEnter);
      host.addEventListener("pointerleave", onPointerLeave);
      if (parentHero) {
        parentHero.addEventListener("pointermove", onParentPointerMove, { passive: true });
      }

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        renderer.setSize(Math.max(width, 1), Math.max(height, 1), false);
        camera.aspect = Math.max(width, 1) / Math.max(height, 1);
        camera.updateProjectionMatrix();
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      resize();

      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry) {
            visible = entry.isIntersecting;
          }
        },
        { threshold: 0.02 }
      );
      intersectionObserver.observe(host);

      const clock = new THREE.Clock();

      const render = () => {
        if (disposed) return;
        frame = requestAnimationFrame(render);
        if (!visible) {
          clock.getDelta();
          return;
        }

        const t = clock.getElapsedTime();

        // Smooth hover factor interpolation
        hoverFactor += ((isHovered ? 1 : 0) - hoverFactor) * 0.08;

        // Inertia decay when not dragging
        if (!isDragging) {
          manualRotY += dragVelocityY;
          manualRotX += dragVelocityX;
          dragVelocityX *= 0.94;
          dragVelocityY *= 0.94;
        }

        // Slow, continuous spin in endless loop
        const baseSpeed = reducedMotion ? 0 : 0.0028 + hoverFactor * 0.0018;
        continuousSpinAngle += baseSpeed;

        // Globe spins in loop around its center
        globe.rotation.z = -continuousSpinAngle;

        // 3D orientation: combine manual drag rotation, hover tilt, and smooth damping
        world.rotation.x += (targetTiltX + manualRotX - world.rotation.x) * 0.055;
        world.rotation.y += (targetTiltY + manualRotY - world.rotation.y) * 0.055;

        // Floating gentle breathing motion
        world.position.y = reducedMotion ? 0 : Math.sin(t * 0.55) * 0.07;

        if (!reducedMotion) {
          // Slow 3D rotation of the orbital network rings & particles
          network.rotation.y = continuousSpinAngle * 1.5;
          network.rotation.x = Math.sin(t * 0.2) * 0.07;
          network.rotation.z = continuousSpinAngle * 0.45;

          particles.rotation.y = -continuousSpinAngle * 0.6;
          particles.rotation.x = continuousSpinAngle * 0.25;

          // Atmospheric glow reacts dynamically to hover state
          haloMaterial.opacity = 0.13 + Math.sin(t * 0.75) * 0.025 + hoverFactor * 0.07;
          halo.scale.setScalar(1 + hoverFactor * 0.035);

          // Signal pulses accelerate and brighten on hover
          const pulseSpeedMul = 1 + hoverFactor * 0.4;
          pulses.forEach((pulse, i) => {
            const angle = ((t * pulse.speed * pulseSpeedMul + pulse.offset) % 1) * Math.PI * 2;
            pulse.mesh.position.set(Math.cos(angle) * pulse.radius, Math.sin(angle) * pulse.radius, 0);
            pulse.mesh.scale.setScalar((0.75 + Math.sin(t * 2.2 + i) * 0.25) * (1 + hoverFactor * 0.28));
          });

          // Constellation nodes pulse gently
          nodes.forEach((node, i) =>
            node.scale.setScalar((0.72 + Math.sin(t * 1.2 + i * 0.65) * 0.28) * (1 + hoverFactor * 0.2))
          );
        }

        renderer.render(scene, camera);
      };
      render();

      cleanup = () => {
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        host.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        host.removeEventListener("pointerenter", onPointerEnter);
        host.removeEventListener("pointerleave", onPointerLeave);
        if (parentHero) {
          parentHero.removeEventListener("pointermove", onParentPointerMove);
        }
        texture.dispose();
        globeGeometry.dispose();
        globeMaterial.dispose();
        haloGeometry.dispose();
        haloMaterial.dispose();
        arcs.forEach((arc) => {
          arc.geometry.dispose();
          (arc.material as Material).dispose();
        });
        pulses.forEach(({ mesh }) => {
          mesh.geometry.dispose();
          (mesh.material as Material).dispose();
        });
        nodes.forEach((node) => (node.material as Material).dispose());
        nodeGeometry.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const idleId = idleWindow.requestIdleCallback?.(start, { timeout: 1400 });
    const timerId = idleId === undefined ? window.setTimeout(start, 900) : undefined;

    return () => {
      disposed = true;
      if (idleId !== undefined) idleWindow.cancelIdleCallback?.(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
      cancelAnimationFrame(frame);
      cleanup();
    };
  }, []);

  return <div ref={hostRef} className="hero-globe-3d" aria-label="Interactive 3D Global Network" />;
}
