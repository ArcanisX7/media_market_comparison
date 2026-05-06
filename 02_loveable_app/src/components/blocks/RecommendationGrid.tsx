import type { GridItem } from "@/data/reportData";

interface RecommendationGridProps {
  title?: string;
  items: GridItem[];
}

export const RecommendationGrid = ({ title, items }: RecommendationGridProps) => {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
      )}
      <div className="flex flex-col gap-3">
        {items.map((it, i) => {
          const hasDetail = Boolean(it.context || it.proposal || it.goal);
          return (
            <div
              key={i}
              className="group rounded-md border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-accent"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                <h4 className="font-display text-base font-semibold uppercase tracking-wider text-foreground">
                  {it.title}
                </h4>
              </div>
              {hasDetail ? (
                <div className="space-y-3">
                  {it.context && (
                    <div>
                      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                        Pozorování
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/90">{it.context}</p>
                    </div>
                  )}
                  {it.proposal && (
                    <div>
                      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                        Návrh
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/90">{it.proposal}</p>
                    </div>
                  )}
                  {it.goal && (
                    <div>
                      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
                        Cíl
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/90">{it.goal}</p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-muted-foreground">{it.content}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
