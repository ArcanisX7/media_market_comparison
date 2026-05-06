export type TechnologyItem = string | { label: string; href: string };

interface TechnologyGridProps {
  title?: string;
  items: TechnologyItem[];
}

export const TechnologyGrid = ({ title, items }: TechnologyGridProps) => {
  const baseClass =
    "inline-block font-display text-sm font-medium uppercase tracking-wider rounded-sm border border-border bg-card px-3 py-1.5 text-foreground transition-colors hover:border-primary hover:text-primary";

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      )}
      <ul className="flex flex-wrap gap-2">
        {items.map((t) => {
          if (typeof t === "string") {
            return (
              <li key={t} className={baseClass}>
                {t}
              </li>
            );
          }
          return (
            <li key={t.href}>
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClass}
              >
                {t.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
