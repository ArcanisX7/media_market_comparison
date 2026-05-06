import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { AccordionItem as AItem } from "@/data/reportData";
import { DefinitionList } from "./DefinitionList";

interface AccordionBlockProps {
  title?: string;
  items: AItem[];
}

export const AccordionBlock = ({ title, items }: AccordionBlockProps) => {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      )}
      <Accordion type="multiple" className="rounded-md border border-border bg-card">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-b border-border last:border-b-0 px-4 data-[state=open]:bg-secondary/40"
          >
            <AccordionTrigger className="font-display text-base font-medium text-foreground hover:no-underline data-[state=open]:text-primary">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {typeof item.content === "string" ? (
                item.content
              ) : (
                <DefinitionList items={item.content} showOuterBorder={false} />
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
