import { useEffect, useState } from "react";
import CosmicWaveField from "./CosmicWaveField";

/** Mounts the global 3D background visual reliably on the client after hydration */
export function GlobalThreeBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <CosmicWaveField />;
}

