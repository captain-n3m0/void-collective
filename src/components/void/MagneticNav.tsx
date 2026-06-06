import { useEffect, useRef } from "react";
import gsap from "gsap";

const ITEMS = [
  { label: "INDEX", id: "index" },
  { label: "ARCHIVE", id: "archive" },
  { label: "TRANSMISSIONS", id: "transmissions" },
  { label: "COLLECTIVE", id: "collective" },
];

export function MagneticNav() {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const items = Array.from(nav.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const tweens = new Map<HTMLElement, gsap.QuickToFunc[]>();

    items.forEach((el) => {
      const xTo = gsap.quickTo(el, "x", { duration: 1.2, ease: "elastic.out(1, 0.45)" });
      const yTo = gsap.quickTo(el, "y", { duration: 1.2, ease: "elastic.out(1, 0.45)" });
      tweens.set(el, [xTo, yTo]);
    });

    const onMove = (e: MouseEvent) => {
      items.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const radius = 180;
        const [xTo, yTo] = tweens.get(el)!;
        if (dist < radius) {
          const pull = (1 - dist / radius) * 0.55;
          xTo(dx * pull);
          yTo(dy * pull);
        } else {
          xTo(0);
          yTo(0);
        }
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-8 py-6 mix-blend-difference">
      <nav ref={navRef} className="flex items-center justify-between">
        <a href="#top" data-magnetic className="magnetic font-mono text-[10px] tracking-[0.4em] text-bone">
          ◉ VOID/COLLECTIVE
        </a>
        <ul className="hidden gap-10 md:flex">
          {ITEMS.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                data-magnetic
                className="magnetic font-mono text-[10px] tracking-[0.4em] text-bone transition-colors hover:text-[oklch(0.82_0.19_200)]"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <div data-magnetic className="magnetic font-mono text-[10px] tracking-[0.4em] text-bone">
          MMXXVI — ∞
        </div>
      </nav>
    </header>
  );
}
