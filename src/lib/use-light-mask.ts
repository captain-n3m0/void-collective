import { useEffect } from "react";

/** Tracks cursor over .light-mask elements for the radial light reveal */
export function useLightMask() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(".light-mask");
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      target.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
}
