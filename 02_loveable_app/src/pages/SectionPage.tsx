import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { TopNavigation } from "@/components/TopNavigation";
import { ReportHeader } from "@/components/ReportHeader";
import { SectionRenderer } from "@/components/SectionRenderer";
import { reportSections } from "@/data/reportData";

interface SectionPageProps {
  sectionId?: string;
}

const SectionPage = ({ sectionId: sectionIdProp }: SectionPageProps) => {
  const params = useParams();
  const sectionId = sectionIdProp ?? params.sectionId;

  const index = reportSections.findIndex((s) => s.id === sectionId);
  const section = index >= 0 ? reportSections[index] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [sectionId]);

  if (!section) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <main className="mx-auto max-w-3xl px-4 sm:px-6">
        <ReportHeader />
        <SectionRenderer section={section} index={index} />
        <footer className="border-t border-border pt-3 pb-10 text-center">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Milan Pštross · Analýza trhu pro Borgis · 2026
          </p>
        </footer>
      </main>
    </div>
  );
};

export default SectionPage;
