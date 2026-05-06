import { Check, X } from "lucide-react";

export type SwotItem = {
  name: string;
  strengths: string[];
  weaknesses: string[];
};

interface SwotGridProps {
  title?: string;
  items: SwotItem[];
}

export const SwotGrid = ({ title, items }: SwotGridProps) => {
  return (
    <section className="space-y-4">
      {title && (
        <h3 className="font-display text-xl font-semibold text-foreground">
          {title}
        </h3>
      )}
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.name}
            className="rounded-md border border-border bg-card p-5 sm:p-6"
          >
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              {item.name}
            </h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-3 text-emerald-500">Silné stránky</p>
                <ul className="space-y-2">
                  {item.strengths.map((s, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        aria-hidden
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3 text-destructive">Slabé stránky</p>
                <ul className="space-y-2">
                  {item.weaknesses.map((w, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground">
                      <X
                        className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
                        aria-hidden
                      />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
