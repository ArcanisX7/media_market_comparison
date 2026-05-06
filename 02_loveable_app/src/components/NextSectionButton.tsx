import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { reportSections } from "@/data/reportData";

interface NextSectionButtonProps {
  nextSectionId: string;
  nextSectionTitle: string;
}

export const NextSectionButton = ({ nextSectionId, nextSectionTitle }: NextSectionButtonProps) => {
  const target = reportSections.find((s) => s.id === nextSectionId);
  const to = target?.route ?? "/";

  return (
    <Link
      to={to}
      className="group mt-12 flex w-full items-center justify-between gap-4 rounded-md border border-border bg-card px-5 py-5 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground sm:px-8 sm:py-6"
    >
      <div className="flex flex-col">
        <span className="eyebrow group-hover:text-primary-foreground">Další sekce</span>
        <span className="font-display text-xl font-semibold text-foreground group-hover:text-primary-foreground sm:text-2xl">
          {nextSectionTitle}
        </span>
      </div>
      <ArrowRight className="h-6 w-6 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:text-primary-foreground" />
    </Link>
  );
};
