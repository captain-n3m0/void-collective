import { useEmerge } from "@/lib/use-emerge";

export interface ArtifactProps {
  no: string;
  title: string;
  medium: string;
  year: string;
  description: string;
  image: string;
  align?: "left" | "right" | "center";
  width?: string; // tailwind width class
  speed?: number; // parallax
  offsetY?: string; // tailwind margin-top
}

export function Artifact({
  no, title, medium, year, description, image,
  align = "left", width = "w-[42vw]", speed = 0.12, offsetY = "",
}: ArtifactProps) {
  const ref = useEmerge<HTMLDivElement>();
  const justify =
    align === "right" ? "ml-auto" : align === "center" ? "mx-auto" : "mr-auto";

  return (
    <article
      ref={ref}
      className={`emerge relative ${justify} ${width} ${offsetY}`}
      data-parallax
      data-speed={speed}
    >
      <div className="light-mask void-glow group relative overflow-hidden bg-void">
        <div data-parallax-warp className="relative aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-[1.04] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.08_0.013_270/0.85)]" />
        </div>
        <div className="absolute left-0 top-0 m-4 font-mono text-[10px] tracking-[0.3em] text-bone/80">
          ARTIFACT NO. {no}
        </div>
        <div className="absolute right-0 top-0 m-4 font-mono text-[10px] tracking-[0.3em] text-mist">
          {year}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7">
          <h3 className="font-display text-3xl uppercase leading-[0.95] tracking-tight text-bone md:text-5xl">
            {title}
          </h3>
        </div>
        <div className="col-span-12 space-y-2 font-mono text-[10px] tracking-[0.25em] text-mist md:col-span-5 md:text-right">
          <div>MEDIUM // {medium}</div>
          <div>ID // {no}-Z</div>
          <div>YR // {year}</div>
        </div>
      </div>
      <p className="mt-4 max-w-[52ch] font-mono text-xs leading-relaxed text-mist">
        {description}
      </p>
    </article>
  );
}
