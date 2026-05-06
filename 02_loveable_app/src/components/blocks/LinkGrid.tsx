export type LinkItem = { label: string; href: string };

interface LinkGridProps {
  title?: string;
  items: LinkItem[];
}

export const LinkGrid = ({ title, items }: LinkGridProps) => {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      )}
      <ul className="flex flex-wrap gap-2">
        {items.map((it) => (
          <li key={it.href}>
            <a
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-sm font-medium uppercase tracking-wider rounded-sm border border-border bg-card px-3 py-1.5 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
