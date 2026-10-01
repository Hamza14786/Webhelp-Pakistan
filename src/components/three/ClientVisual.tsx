/**
 * Unified 3D background: GlobalThreeBackground now handles all 3D visuals site-wide.
 * Returning null prevents duplicate WebGL contexts and maximizes GPU performance.
 */
export function ClientVisual(_props?: { density?: number }) {
  return null;
}

