export const ReportHeader = () => {
  return (
    <section className="relative -mx-4 mt-8 overflow-hidden rounded-md bg-gradient-hero px-4 py-12 sm:-mx-6 sm:mt-12 sm:px-10 sm:py-16">
      <h1 className="font-display text-4xl font-bold leading-[1.02] text-foreground sm:text-5xl">
        Analýza trhu <span className="text-primary">pro Borgis</span>
      </h1>
      <div className="mt-6 flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-primary" aria-hidden />
        <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Zpracoval <span className="text-foreground">Milan Pštross</span>
        </p>
      </div>
      <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
        Analýza tržní pozice portálů Borgis ve srovnání s hlavní konkurencí na základě dat NetMonitoru za období 05/2025–04/2026. Studie se zaměřuje na dosah, engagement, hloubku konzumace obsahu a relativní výkonnost jednotlivých webů v kontextu českého online mediálního trhu.
      </p>
    </section>
  );
};
