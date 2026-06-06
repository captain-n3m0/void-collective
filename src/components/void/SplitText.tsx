import { useMemo } from "react";

interface Props {
  text: string;
  className?: string;
  charClassName?: string;
}

/** Lightweight SplitText — each char gets its own span for warp/skew transforms */
export function SplitText({ text, className, charClassName }: Props) {
  const words = useMemo(() => text.split(" "), [text]);
  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {Array.from(word).map((ch, ci) => (
            <span
              key={ci}
              data-split-char
              className={`inline-block will-change-transform ${charClassName ?? ""}`}
              style={{ transformOrigin: "50% 100%" }}
            >
              {ch}
            </span>
          ))}
          {wi < words.length - 1 && <span data-split-char className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
