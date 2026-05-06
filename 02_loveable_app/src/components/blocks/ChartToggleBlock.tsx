import { useState } from "react";
import { FlourishEmbed } from "./FlourishEmbed";
import { cn } from "@/lib/utils";
import type { ChartVariant } from "@/data/reportData";

interface ChartToggleBlockProps {
  title?: string;
  variants: ChartVariant[];
}

export const ChartToggleBlock = ({ title, variants }: ChartToggleBlockProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleSelect = (i: number) => {
    setActiveIdx(i);
  };

  return (
    <figure className="space-y-4">
      {title && (
        <figcaption className="font-display text-xl font-semibold text-foreground">
          {title}
        </figcaption>
      )}
      <div
        role="tablist"
        aria-label={title}
        className="inline-flex flex-wrap gap-1 rounded-md border border-border bg-card p-1"
      >
        {variants.map((v, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={v.label + i}
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(i)}
              className={cn(
                "font-display text-sm font-medium uppercase tracking-wider px-3 py-1.5 rounded-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {v.label}
            </button>
          );
        })}
      </div>
      <div className="rounded-md border border-border bg-card p-3 shadow-elegant sm:p-5">
        {variants.map((v, i) => {
          const isActive = i === activeIdx;
          return (
            <div key={v.flourishId} hidden={!isActive} aria-hidden={!isActive}>
              <FlourishEmbed flourishId={v.flourishId} />
            </div>
          );
        })}
      </div>
    </figure>
  );
};
