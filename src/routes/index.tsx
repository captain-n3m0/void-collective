import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { MagneticNav } from "@/components/void/MagneticNav";
import { SplitText } from "@/components/void/SplitText";
import { Artifact } from "@/components/void/Artifact";
import { useScrollWarp } from "@/lib/use-scroll-warp";
import { useLightMask } from "@/lib/use-light-mask";
import { useEmerge } from "@/lib/use-emerge";

import art01 from "@/assets/artifact-01.jpg";
import art02 from "@/assets/artifact-02.jpg";
import art03 from "@/assets/artifact-03.jpg";
import art04 from "@/assets/artifact-04.jpg";
import art05 from "@/assets/artifact-05.jpg";
import art06 from "@/assets/artifact-06.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE VOID COLLECTIVE — Archive of Light & Shadow" },
      { name: "description", content: "An infinite archive of experimental digital art, light installations, and sculpture." },
    ],
  }),
  component: Index,
});

const ARTIFACTS = [
  { no: "01", title: "LUMINA OBJEKT", medium: "Volumetric projection on smoke", year: "2024", description: "A study in ephemeral texture and the impermanence of light. The work materializes only in the act of being witnessed; absence and presence become indistinguishable.", image: art01, align: "left" as const, width: "w-[44vw]", speed: 0.14, offsetY: "mt-0" },
  { no: "02", title: "OBSIDIAN / SUSPENDED", medium: "Polished basalt, single refraction", year: "2023", description: "A monolith arrested mid-fall. One thin band of prismatic light bisects its dark mass — the only evidence of geometry.", image: art02, align: "right" as const, width: "w-[34vw]", speed: 0.22, offsetY: "-mt-40" },
  { no: "03", title: "FIELD III ⟶ INTERFERENCE", medium: "Suspended acrylic, dichroic film", year: "2024", description: "A cathedral of layered planes. Light passes through, becomes other. The viewer is implicated in the diffraction.", image: art03, align: "left" as const, width: "w-[38vw]", speed: 0.10, offsetY: "mt-32" },
  { no: "04", title: "THE QUIET CONSTELLATION", medium: "5,000 suspended fiber-optic points", year: "2022", description: "A horizonless interior. Each point drifts at its own period, refusing pattern. The eye attempts constellations and fails.", image: art04, align: "right" as const, width: "w-[46vw]", speed: 0.18, offsetY: "-mt-24" },
  { no: "05", title: "CONCRETE / DISSOLVE", medium: "Cast concrete, mirror fragments", year: "2023", description: "The pedestal eats itself. What remains is a record of the moment material lost confidence in its own boundaries.", image: art05, align: "left" as const, width: "w-[32vw]", speed: 0.26, offsetY: "mt-40" },
  { no: "06", title: "MERCURY DREAMS A SPECTRUM", medium: "Liquid metal, controlled oscillation", year: "2025", description: "A surface that remembers every color it has touched. The ripple is not water but memory rendered visible.", image: art06, align: "right" as const, width: "w-[40vw]", speed: 0.12, offsetY: "-mt-16" },
];

function Index() {
  useScrollWarp();
  useLightMask();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div id="top" className="relative bg-void-deep">
      <MagneticNav />
      <Hero />
      <Manifest />
      <Archive />
      <Transmissions />
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative z-10 min-h-screen overflow-hidden px-6 pt-40 md:px-12">
      {/* Aperture halo behind headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.18 295 / 0.35), oklch(0.82 0.19 200 / 0.18) 40%, transparent 70%)",
        }}
      />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 mb-12 flex items-center justify-between font-mono text-[10px] tracking-[0.35em] text-mist">
          <span>EST. MMXIX // INTERSTITIAL ARCHIVE</span>
          <span className="hidden md:block">N 51°30′26″ // W 0°07′39″</span>
          <span>VOL. 04 / ∞</span>
        </div>

        <h1 className="col-span-12 font-display text-[clamp(4rem,16vw,18rem)] font-bold uppercase leading-[0.82] tracking-[-0.04em] text-bone">
          <div className="overflow-hidden">
            <SplitText text="EXPLORE" />
          </div>
          <div className="-mt-[0.08em] overflow-hidden pl-[12vw] italic">
            <span className="prism-text font-display">
              <SplitText text="the" />
            </span>
          </div>
          <div className="-mt-[0.08em] overflow-hidden pl-[2vw]">
            <SplitText text="INTERSTITIAL" />
          </div>
        </h1>

        <div className="col-span-12 mt-24 grid grid-cols-12 gap-4">
          <p className="col-span-12 max-w-[34ch] font-mono text-xs leading-relaxed text-mist md:col-span-5 md:col-start-1">
            CHRONICLES OF LIGHT & SHADOW. An ongoing archive of experimental digital art, volumetric installation, and ephemeral sculpture — catalogued by The Void Collective since 2019.
          </p>
          <div className="col-span-12 flex flex-col items-end justify-end gap-4 font-mono text-[10px] tracking-[0.35em] text-mist md:col-span-5 md:col-start-8">
            <div className="text-right">
              <div>114 ARTIFACTS CATALOGUED</div>
              <div>09 ACTIVE TRANSMISSIONS</div>
              <div>∞ EMERGENT WORKS</div>
            </div>
            <a
              href="#archive"
              className="group inline-flex items-center gap-3 border border-bone/30 px-5 py-3 text-bone transition-all hover:border-transparent hover:bg-bone hover:text-void-deep"
            >
              <span>ENTER ARCHIVE</span>
              <span className="transition-transform group-hover:translate-x-1">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Drift caption */}
      <div className="pointer-events-none absolute bottom-8 left-6 font-mono text-[10px] tracking-[0.35em] text-ash md:left-12">
        SCROLL TO EMERGE — ⟱
      </div>
    </section>
  );
}

/* ---------- MANIFEST ---------- */
function Manifest() {
  const ref = useEmerge<HTMLDivElement>();
  return (
    <section id="index" className="relative z-10 px-6 py-48 md:px-12">
      <div ref={ref} className="emerge grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-2">
          <div className="font-mono text-[10px] tracking-[0.35em] text-mist">
            § 001
            <br />
            MANIFEST
          </div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <p className="font-display text-3xl uppercase leading-[1.05] tracking-tight text-bone md:text-6xl">
            We catalogue what refuses to hold still —
            <span className="prism-text"> light bent into rooms,</span> matter
            persuaded toward the ephemeral, signal mistaken for substance.
          </p>
          <p className="mt-12 max-w-[60ch] font-mono text-xs leading-relaxed text-mist">
            The Void Collective operates as both archive and rumour. Works are not displayed; they are <em>summoned</em> from the dark — emerging only when the observer arrives close enough to disturb their stillness. Each entry below is a coordinate, not a destination.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- ARCHIVE ---------- */
function Archive() {
  return (
    <section id="archive" className="relative z-10 px-6 py-32 md:px-12">
      <div className="mb-32 flex items-end justify-between border-b border-bone/10 pb-6 font-mono text-[10px] tracking-[0.35em] text-mist">
        <div>
          THE FLOATING EXHIBIT
          <br />
          <span className="text-ash">— ASYMMETRIC, NON-GRIDDED —</span>
        </div>
        <div className="text-right">
          FILTER: ALL
          <br />
          <span className="text-ash">SORT: CHRONOS / DESC</span>
        </div>
      </div>

      <div className="relative space-y-48">
        {ARTIFACTS.map((a) => (
          <Artifact key={a.no} {...a} />
        ))}
      </div>
    </section>
  );
}

/* ---------- TRANSMISSIONS ---------- */
function Transmissions() {
  const ref = useEmerge<HTMLDivElement>();
  return (
    <section
      id="transmissions"
      className="relative z-10 mt-48 overflow-hidden px-6 py-48 md:px-12"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[480px] -translate-y-1/2 opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.80 0.22 330 / 0.25), transparent 70%)",
        }}
      />
      <div ref={ref} className="emerge mx-auto max-w-5xl text-center">
        <div className="mb-6 font-mono text-[10px] tracking-[0.35em] text-mist">
          § 014 // TRANSMISSIONS
        </div>
        <h2 className="font-display text-[clamp(3rem,10vw,9rem)] uppercase leading-[0.9] tracking-[-0.03em] text-bone">
          <span className="block">CHRONICLES OF</span>
          <span className="prism-text block italic">LIGHT & SHADOW</span>
        </h2>
        <p className="mx-auto mt-10 max-w-[44ch] font-mono text-xs leading-relaxed text-mist">
          Subscribe to receive coordinates as new artifacts emerge from the archive. No frequency. No promise. Only transmissions.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex max-w-md items-center gap-0 border border-bone/20"
        >
          <input
            type="email"
            placeholder="ENTER COORDINATE / EMAIL"
            className="flex-1 bg-transparent px-4 py-4 font-mono text-[11px] tracking-[0.2em] text-bone placeholder:text-ash focus:outline-none"
          />
          <button className="border-l border-bone/20 px-5 py-4 font-mono text-[11px] tracking-[0.3em] text-bone transition-colors hover:bg-bone hover:text-void-deep">
            ⟶
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer
      id="collective"
      className="relative z-10 border-t border-bone/10 px-6 py-16 md:px-12"
    >
      <div className="grid grid-cols-12 gap-4 font-mono text-[10px] tracking-[0.35em] text-mist">
        <div className="col-span-12 md:col-span-3">
          ◉ VOID/COLLECTIVE
          <br />
          <span className="text-ash">EST. MMXIX</span>
        </div>
        <div className="col-span-6 md:col-span-3">
          STUDIO
          <br />
          Unit 04 / Bethnal Green
          <br />
          London E2
        </div>
        <div className="col-span-6 md:col-span-3">
          INDEX
          <br />
          INSTAGRAM ↗
          <br />
          ARE.NA ↗
          <br />
          VIMEO ↗
        </div>
        <div className="col-span-12 md:col-span-3 md:text-right">
          © MMXXVI
          <br />
          ALL RIGHTS DISSOLVED
        </div>
      </div>
    </footer>
  );
}
