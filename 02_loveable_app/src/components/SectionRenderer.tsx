import type { ContentBlock, ReportSection } from "@/data/reportData";
import { reportSections } from "@/data/reportData";
import { TextBlock } from "./blocks/TextBlock";
import { ChartBlock } from "./blocks/ChartBlock";
import { ChartToggleBlock } from "./blocks/ChartToggleBlock";
import { AccordionBlock } from "./blocks/AccordionBlock";
import { DefinitionList } from "./blocks/DefinitionList";
import { InsightCard } from "./blocks/InsightCard";
import { RecommendationGrid } from "./blocks/RecommendationGrid";
import { TechnologyGrid } from "./blocks/TechnologyGrid";
import { LinkGrid } from "./blocks/LinkGrid";
import { SwotGrid } from "./blocks/SwotGrid";
import { ConclusionBlock } from "./blocks/ConclusionBlock";
import { AuthorBio } from "./blocks/AuthorBio";
import { NextSectionButton } from "./NextSectionButton";

interface SectionRendererProps {
  section: ReportSection;
  index: number;
}

// Group consecutive insight blocks into a responsive grid.
type RenderUnit =
  | { kind: "block"; block: ContentBlock; idx: number }
  | { kind: "insight-group"; blocks: Extract<ContentBlock, { type: "insight" }>[]; idx: number };

function groupBlocks(blocks: ContentBlock[]): RenderUnit[] {
  const out: RenderUnit[] = [];
  let buffer: Extract<ContentBlock, { type: "insight" }>[] = [];
  const flush = () => {
    if (buffer.length) {
      out.push({ kind: "insight-group", blocks: buffer, idx: out.length });
      buffer = [];
    }
  };
  blocks.forEach((b, i) => {
    if (b.type === "insight") buffer.push(b);
    else {
      flush();
      out.push({ kind: "block", block: b, idx: i });
    }
  });
  flush();
  return out;
}

export const SectionRenderer = ({ section, index }: SectionRendererProps) => {
  const units = groupBlocks(section.blocks);
  const next = section.nextSectionId
    ? reportSections.find((s) => s.id === section.nextSectionId)
    : undefined;

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="scroll-mt-20 pt-2 pb-2 sm:pt-4 sm:pb-2"
    >
      <header className="mb-10 sm:mb-14">
        <p className="eyebrow mb-1">Sekce {String(index + 1).padStart(2, "0")}</p>
        <h2
          id={`${section.id}-title`}
          className="font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl"
        >
          {section.title}
        </h2>
        <div className="editorial-rule mt-5" />
        {section.intro && (
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
            {section.intro}
          </p>
        )}
      </header>

      <div className="space-y-10 sm:space-y-14">
        {units.map((u) => {
          if (u.kind === "insight-group") {
            return (
              <div
                key={`ig-${u.idx}`}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {u.blocks.map((b, i) => (
                  <InsightCard key={i} title={b.title} content={b.content} href={b.href} />
                ))}
              </div>
            );
          }
          const b = u.block;
          switch (b.type) {
            case "text":
              return <TextBlock key={u.idx} title={b.title} content={b.content} />;
            case "chart":
              return (
                <ChartBlock
                  key={u.idx}
                  title={b.title}
                  flourishId={b.flourishId}
                  desktopHeight={b.desktopHeight}
                  mobileHeight={b.mobileHeight}
                />
              );
            case "chart-toggle":
              return <ChartToggleBlock key={u.idx} title={b.title} variants={b.variants} />;
            case "accordion":
              return <AccordionBlock key={u.idx} title={b.title} items={b.items} />;
            case "definition-list":
              return <DefinitionList key={u.idx} title={b.title} items={b.items} />;
            case "recommendation-grid":
              return <RecommendationGrid key={u.idx} title={b.title} items={b.items} />;
            case "technology-grid":
              return <TechnologyGrid key={u.idx} title={b.title} items={b.items} />;
            case "link-grid":
              return <LinkGrid key={u.idx} title={b.title} items={b.items} />;
            case "swot-grid":
              return <SwotGrid key={u.idx} title={b.title} items={b.items} />;
            case "conclusion":
              return <ConclusionBlock key={u.idx} title={b.title} content={b.content} />;
            case "author-bio":
              return (
                <AuthorBio
                  key={u.idx}
                  name={b.name}
                  role={b.role}
                  email={b.email}
                  linkedin={b.linkedin}
                  github={b.github}
                  photo={b.photo}
                />
              );
            default:
              return null;
          }
        })}
      </div>

      {next && (
        <NextSectionButton nextSectionId={next.id} nextSectionTitle={next.title} />
      )}
    </section>
  );
};
