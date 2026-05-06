interface InsightCardProps {
  title?: string;
  content: string;
  href?: string;
}

export const InsightCard = ({ title, content, href }: InsightCardProps) => {
  const inner = (
    <>
      <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-primary" aria-hidden />
      {title && (
        <h4 className="eyebrow mb-2">{title}</h4>
      )}
      <p className="font-display text-lg font-medium leading-snug text-foreground whitespace-pre-line">
        {content.trim()}
      </p>
    </>
  );

  const baseClass =
    "relative block rounded-md border border-border bg-card p-5 pl-6 transition-colors hover:border-primary/60";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {inner}
      </a>
    );
  }

  return <article className={baseClass}>{inner}</article>;
};
