interface TextBlockProps {
  title?: string;
  content: string;
}

export const TextBlock = ({ title, content }: TextBlockProps) => {
  const trimmed = content.trim();
  // Split into paragraphs by blank line; within each, handle bullet lines starting with "- ".
  const paragraphs = trimmed.split(/\n\s*\n/);

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
      )}
      {paragraphs.map((para, i) => {
        const lines = para.split("\n").map((l) => l.trim()).filter(Boolean);
        const allBullets = lines.length > 1 && lines.every((l) => l.startsWith("- "));
        if (allBullets) {
          return (
            <ul key={i} className="ml-5 list-disc space-y-1.5 text-base leading-relaxed text-muted-foreground">
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^-\s*/, "")}</li>
              ))}
            </ul>
          );
        }
        // Mixed: render bullets inline-grouped, others as paragraph lines
        const hasBullets = lines.some((l) => l.startsWith("- "));
        if (hasBullets) {
          return (
            <div key={i} className="space-y-3">
              {(() => {
                const out: JSX.Element[] = [];
                let bulletBuf: string[] = [];
                const flush = () => {
                  if (bulletBuf.length) {
                    out.push(
                      <ul key={`u-${out.length}`} className="ml-5 list-disc space-y-1.5 text-base leading-relaxed text-muted-foreground">
                        {bulletBuf.map((b, k) => <li key={k}>{b.replace(/^-\s*/, "")}</li>)}
                      </ul>
                    );
                    bulletBuf = [];
                  }
                };
                lines.forEach((l, k) => {
                  if (l.startsWith("- ")) bulletBuf.push(l);
                  else {
                    flush();
                    out.push(
                      <p key={`p-${k}`} className="text-base leading-relaxed text-muted-foreground">{l}</p>
                    );
                  }
                });
                flush();
                return out;
              })()}
            </div>
          );
        }
        return (
          <p key={i} className="text-base leading-relaxed text-muted-foreground">
            {lines.join(" ")}
          </p>
        );
      })}
    </div>
  );
};
