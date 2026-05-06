interface DefinitionListProps {
  title?: string;
  items: { title: string; content: string }[];
  showOuterBorder?: boolean;
}

export const DefinitionList = ({ title, items, showOuterBorder = true }: DefinitionListProps) => {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      )}
      <dl
        className={
          showOuterBorder
            ? "rounded-md border border-border bg-card divide-y divide-border"
            : "divide-y divide-border"
        }
      >
        {items.map((item, i) => (
          <div key={i} className="px-4 py-3">
            <dt className="font-display text-base font-medium text-foreground">{item.title}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.content}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
