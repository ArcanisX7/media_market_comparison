interface ConclusionBlockProps {
  title?: string;
  content: string;
}

export const ConclusionBlock = ({ title, content }: ConclusionBlockProps) => {
  const paragraphs = content.trim().split(/\n+/).map((l) => l.trim()).filter(Boolean);
  return (
    <section className="relative overflow-hidden rounded-md border border-border bg-card p-6 shadow-elegant sm:p-10">
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary" aria-hidden />
      {title && (
        <>
          <p className="eyebrow mb-3">Závěr</p>
          <h3 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h3>
          <div className="editorial-rule my-5" />
        </>
      )}
      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="font-display text-lg leading-relaxed text-foreground sm:text-xl">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
};
