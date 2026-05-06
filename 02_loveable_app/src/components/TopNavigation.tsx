import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { reportSections } from "@/data/reportData";

export const TopNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeId = (() => {
    const match = reportSections.find((s) => s.route === location.pathname);
    if (match) return match.id;
    if (location.pathname === "/") return reportSections[0].id;
    return reportSections[0].id;
  })();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background"
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="inline-block h-5 w-1 bg-primary" aria-hidden />
          <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
            Borgis <span className="text-muted-foreground">· Analýza trhu</span>
          </span>
        </Link>
        <nav className="ml-auto -mr-2 flex flex-wrap items-center justify-end gap-x-1 gap-y-1 sm:gap-x-2">
          {reportSections.map((s, i) => {
            const isActive = activeId === s.id;
            return (
              <Link
                key={s.id}
                to={s.route}
                className={cn(
                  "relative shrink-0 rounded-sm px-2 py-1.5 font-display text-xs font-medium uppercase tracking-wider transition-colors sm:px-3 sm:text-sm",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="hidden text-primary sm:mr-1.5 sm:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
                {isActive && (
                  <span className="absolute -bottom-px left-2 right-2 h-[2px] bg-primary" aria-hidden />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
