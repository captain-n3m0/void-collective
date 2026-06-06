import { useEffect } from "react";
import gsap from "gsap";

/**
 * Distortional scrolling: warps [data-split-char] and [data-parallax] elements
 * based on scroll velocity. Snaps back when scrolling stops.
 */
export function useScrollWarp() {
  useEffect(() => {
    let lastY = window.scrollY;
    let lastT = performance.now();
    let velocity = 0;
    let raf = 0;
    let stopTimer: ReturnType<typeof setTimeout>;

    const apply = () => {
      const skew = gsap.utils.clamp(-12, 12, velocity * 0.06);
      const scaleY = 1 + gsap.utils.clamp(-0.08, 0.08, velocity * 0.0006);
      gsap.to("[data-split-char]", {
        skewY: skew * 0.35,
        scaleY,
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto",
      });
      gsap.to("[data-parallax-warp]", {
        skewY: skew * 0.18,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const snapBack = () => {
      velocity = 0;
      gsap.to("[data-split-char]", {
        skewY: 0,
        scaleY: 1,
        duration: 1.1,
        ease: "elastic.out(1, 0.5)",
        overwrite: "auto",
      });
      gsap.to("[data-parallax-warp]", {
        skewY: 0,
        duration: 1.1,
        ease: "elastic.out(1, 0.5)",
        overwrite: "auto",
      });
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const now = performance.now();
        const dy = window.scrollY - lastY;
        const dt = Math.max(1, now - lastT);
        velocity = (dy / dt) * 16; // px/frame approx
        lastY = window.scrollY;
        lastT = now;
        apply();
        raf = 0;
        clearTimeout(stopTimer);
        stopTimer = setTimeout(snapBack, 140);
      });
    };

    // Parallax: per-element data-speed
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    const onParallax = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.speed ?? "0.15");
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const offset = (center - vh / 2) * -speed;
        el.style.setProperty("--py", `${offset.toFixed(2)}px`);
        el.style.transform = `translate3d(0, var(--py), 0)`;
      });
    };

    const combined = () => {
      onScroll();
      onParallax();
    };

    onParallax();
    window.addEventListener("scroll", combined, { passive: true });
    window.addEventListener("resize", onParallax);
    return () => {
      window.removeEventListener("scroll", combined);
      window.removeEventListener("resize", onParallax);
      clearTimeout(stopTimer);
    };
  }, []);
}
