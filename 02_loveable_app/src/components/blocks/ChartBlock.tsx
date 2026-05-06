import { FlourishEmbed } from "./FlourishEmbed";

interface ChartBlockProps {
  title?: string;
  flourishId: string;
  desktopHeight?: number;
  mobileHeight?: number;
}

export const ChartBlock = ({ title, flourishId, desktopHeight, mobileHeight }: ChartBlockProps) => {
  return (
    <figure className="space-y-4">
      {title && (
        <figcaption className="font-display text-xl font-semibold text-foreground">
          {title}
        </figcaption>
      )}
      <div className="rounded-md border border-border bg-card p-3 shadow-elegant sm:p-5">
        <FlourishEmbed
          flourishId={flourishId}
          desktopHeight={desktopHeight}
          mobileHeight={mobileHeight}
        />
      </div>
    </figure>
  );
};
