import milanPhoto from "@/assets/milan-pstross.jpg";

export type DefinitionItem = { title: string; content: string };
export type AccordionItem = { title: string; content: string | DefinitionItem[] };
export type ChartVariant = { label: string; flourishId: string };
export type GridItem = {
  title: string;
  content: string;
  context?: string;
  proposal?: string;
  goal?: string;
};
export type LinkGridItem = { label: string; href: string };
export type SwotItem = { name: string; strengths: string[]; weaknesses: string[] };

export type ContentBlock =
  | { type: "text"; title?: string; content: string }
  | { type: "chart"; title?: string; flourishId: string; desktopHeight?: number; mobileHeight?: number }
  | { type: "chart-toggle"; title?: string; variants: ChartVariant[] }
  | { type: "accordion"; title?: string; items: AccordionItem[] }
  | { type: "definition-list"; title?: string; items: DefinitionItem[] }
  | { type: "insight"; title?: string; content: string; href?: string }
  | { type: "recommendation-grid"; title?: string; items: GridItem[] }
  | { type: "technology-grid"; title?: string; items: (string | LinkGridItem)[] }
  | { type: "link-grid"; title?: string; items: LinkGridItem[] }
  | { type: "swot-grid"; title?: string; items: SwotItem[] }
  | { type: "conclusion"; title?: string; content: string }
  | {
      type: "author-bio";
      name: string;
      role: string;
      email: string;
      linkedin: string;
      github: string;
      photo: string;
    };

export type ReportSection = {
  id: string;
  title: string;
  route: string;
  intro?: string;
  blocks: ContentBlock[];
  nextSectionId?: string;
};

export const reportSections: ReportSection[] = [
  {
    id: "vychodiska",
    title: "Východiska",
    route: "/vychodiska",
    nextSectionId: "zakladni-porovnani",
    blocks: [
      {
        type: "text",
        title: "Zadání",
        content: `
Zpracovat analýzu tržní pozice portálů Borgis ve srovnání s hlavní konkurencí a s využitím veřejně dostupných dat za posledních 12 měsíců. 
Výstupem by měl být report obsahující srovnání klíčových metrik výkonu, identifikaci silných a slabých stránek vůči konkurenci. Report by měl obsahovat konkrétní datově podložené návrhy na produktová či obsahová zlepšení, která by vedla ke zvýšení loajality čtenářů a posílení tržního podílu.
`,
      },
      { type: "insight", title: "Zdroj dat", content: "NetMonitor", href: "https://online.netmonitor.cz/" },
      { type: "insight", title: "Sledované období", content: "Květen 2025 — Duben 2026" },
      {
        type: "definition-list",
        title: "Hlavní metriky",
        items: [
          { title: "Real users (RU)", content: "Počet unikátních uživatelů za daný měsíc." },
          { title: "ATS [s]", content: "Průměrný čas strávený jedním uživatelem na webu." },
          { title: "Views per real user (PV/RU)", content: "Počet zobrazených stránek na jednoho uživatele." },
        ],
      },
      {
        type: "accordion",
        title: "Doplňkové metriky",
        items: [
          {
            title: "Zobrazit doplňkové metriky",
            content: [
              { title: "Views (PV)", content: "Celkový počet zobrazení stránek." },
              { title: "Visits", content: "Počet návštěv." },
              { title: "Time [s]", content: "Celkový čas strávený na webu." },
              { title: "Reach", content: "Podíl uživatelů online populace." },
              { title: "Audience share", content: "Podíl uživatelů vůči trhu." },
              { title: "Share of time", content: "Podíl času stráveného na trhu." },
              { title: "Time per view [s]", content: "Průměrný čas na stránku." },
              { title: "Time per visit [s]", content: "Průměrný čas návštěvy." },
              { title: "Views share", content: "Podíl pageviews." },
              { title: "Visits per real user", content: "Počet návratů uživatele." },
            ],
          },
        ],
      },
      {
        type: "text",
        title: "Metodika",
        content: `
Základem bylo vyhodnocení klíčových metrik (Real users, ATS, Views per real user) v ročních průměrech i měsíčním vývoji se zohledněním sezónnosti.
Vztahy mezi metrikami byly analyzovány pomocí Spearmanovy korelace, normalita dat ověřena Shapiro–Wilkovým testem a rozdíly mezi weby testovány Kruskal–Wallisovým testem.

Pro kvantifikaci rozdílů byly využity regresní modely (OLS) a doplněny o boxploty. Následně byly vytvořeny agregované ukazatele (Engagement index, Size index) pro celkové srovnání výkonu.V závěru byla provedena analýza overperformance na základě reziduí, která ukazuje, jak si jednotlivé weby vedou vzhledem ke své velikosti.
`,
      },
      {
        type: "technology-grid",
        title: "Použité technologie",
        items: [
          { label: "Python", href: "https://www.python.org" },
          { label: "Jupyter Notebook", href: "https://jupyter.org" },
          { label: "Flourish Studio", href: "https://flourish.studio" },
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "ClaudeAI", href: "https://claude.ai" },
          { label: "Lovable", href: "https://lovable.dev" },
        ],
      },
      {
        type: "text",
        title: "Výběr portálů pro analýzu",
        content: `
Pro analýzu byly vybrány portály Borgis (Novinky.cz, Sport.cz, Super.cz) a jejich hlavní konkurenti (iDNES.cz, Aktuálně.cz, Blesk.cz, Denik.cz, Expres.cz, Extra.cz). Konkurenční weby byly zvoleny na základě velikosti publika (počet reálných uživatelů) a převažujícího obsahového zaměření.

Novinky.cz byly vymezeny jako zpravodajský portál a Super.cz jako bulvární portál. Pro oba tyto segmenty byli následně vybráni vždy tři relevantní konkurenti se srovnatelným zaměřením. Sport.cz byl identifikován jako sportovní portál, nicméně na trhu neexistuje srovnatelně silný samostatný sportovní web. Sportovní obsah je typicky součástí širších zpravodajských portálů, proto byli jako konkurenti zvoleni velikostně srovnatelní hráči z celkového trhu.
`,
      },
      {
        type: "link-grid",
        title: "Analyzované weby",
        items: [
          { label: "Novinky.cz", href: "https://www.novinky.cz" },
          { label: "Sport.cz", href: "https://www.sport.cz" },
          { label: "Super.cz", href: "https://www.super.cz" },
          { label: "iDNES.cz", href: "https://www.idnes.cz" },
          { label: "Aktuálně.cz", href: "https://www.aktualne.cz" },
          { label: "Blesk.cz", href: "https://www.blesk.cz" },
          { label: "Denik.cz", href: "https://www.denik.cz" },
          { label: "Expres.cz", href: "https://www.expres.cz" },
          { label: "Extra.cz", href: "https://www.extra.cz" },
        ],
      },
    ],
  },
  {
    id: "zakladni-porovnani",
    title: "Základní porovnání",
    route: "/zakladni-porovnani",
    nextSectionId: "statisticka-analyza",
    blocks: [
      { type: "chart", title: "Průměrné hodnoty hlavních metrik", flourishId: "28814091" },
      {
        type: "text",
        content: `
Roční průměry ukazují výrazně odlišné strategie jednotlivých portálů z pohledu dosahu i engagementu. Novinky.cz dominují v počtu reálných uživatelů (4,88 mil.) a zároveň výrazně vedou i v průměrném čase stráveném na uživatele (ATS 6067 s), což potvrzuje silnou schopnost nejen přivést publikum, ale také ho dlouhodobě udržet.

iDNES.cz a Deník.cz se pohybují těsně za Novinky.cz z hlediska dosahu, nicméně jejich engagement je slabší, zejména u Deník.cz, který má nejnižší ATS mezi velkými hráči. Naopak iDNES.cz vyniká extrémně vysokým počtem zobrazení na uživatele (PV/RU 88), což naznačuje velmi silnou hloubku konzumace obsahu, i když celkový čas nedosahuje úrovně Novinek.

Super.cz a Sport.cz představují středně velké portály s vyváženým výkonem. Super.cz má nadprůměrný ATS i solidní PV/RU, což odpovídá bulvárnímu charakteru s důrazem na kontinuální konzumaci obsahu. Sport.cz dosahuje podobného času na uživatele jako iDNES.cz, ale s nižší hloubkou prohlížení, což může souviset s charakterem sportovního obsahu.

Bulvární konkurence (Blesk.cz, Extra.cz, Expres.cz) vykazuje obecně nižší čas na uživatele, ale relativně vyšší počet zobrazení na uživatele (zejména Extra.cz a Blesk.cz). To ukazuje na rychlou, fragmentovanou konzumaci většího množství kratších obsahů. Expres.cz v tomto srovnání výrazně zaostává jak v dosahu, tak v engagementu.
`,
      },
      {
        type: "chart-toggle",
        title: "Vývoj metrik ve sledovaném období",
        variants: [
          { label: "Real users", flourishId: "28815232" },
          { label: "ATS", flourishId: "28815556" },
          { label: "PV/RU", flourishId: "28815613" },
        ],
      },
      {
        type: "text",
        content: `
Vývoj v čase potvrzuje, že výkon jednotlivých portálů není stabilní, ale výrazně ovlivněný sezónností a typem obsahu. Nejvýraznější výkyvy jsou patrné u zpravodajských webů, kde dochází k nárůstům zejména na podzim (září–říjen) a na začátku roku. Novinky.cz zde opakovaně posilují svou pozici, kdy v září 2025 dosahují maxima jak v počtu uživatelů, tak následně i ve vyšší aktivitě. Naopak letní měsíce (červenec–srpen) vykazují pokles napříč téměř všemi portály, což odpovídá nižší konzumaci zpravodajství během dovolených.

Podobný sezónní efekt je vidět i u ATS. U většiny webů dochází k propadu v zimním období kolem prosince, kdy uživatelé tráví na stránkách méně času, a naopak k nárůstům na podzim. Novinky.cz si však drží výrazný náskok po celý rok, přestože i zde je patrná volatilita. Zajímavé je, že Sport.cz vykazuje silné špičky v období významných sportovních událostí (např. leden–únor), což ukazuje na vysokou citlivost na konkrétní obsah.

Metrika Views per real user ukazuje odlišnou dynamiku. iDNES.cz si stabilně drží nejvyšší hodnoty napříč celým obdobím, což potvrzuje dlouhodobě silný model založený na vysoké hloubce prohlížení. U většiny portálů je patrný pokles v září, který následně střídá růst v zimních měsících, zejména v lednu. To naznačuje, že uživatelé se po prázdninách vracejí, ale jejich chování se stabilizuje až s nástupem pravidelného režimu.

Bulvární portály (Super.cz, Extra.cz, Blesk.cz) vykazují větší volatilitu v počtu zobrazení na uživatele, což odpovídá charakteru obsahu závislému na aktuálních tématech a virálních článcích. Například Extra.cz má extrémní výkyvy během léta, zatímco Super.cz je stabilnější. Expres.cz dlouhodobě zaostává ve všech metrikách bez výraznější sezónní dynamiky.
`,
      },
      {
        type: "chart-toggle",
        title: "Porovnání portálů k trhu a sektoru",
        variants: [
          { label: "Real users", flourishId: "28816289" },
          { label: "ATS", flourishId: "28816567" },
          { label: "PV/RU", flourishId: "28816625" },
        ],
      },
      {
        type: "text",
        content: `
Agregovaný pohled přes obsahové segmenty potvrzuje rozdílnou dynamiku jednotlivých typů webů a zároveň dobře ukazuje pozici portálů Borgis vůči „typickému“ výkonu trhu.

V případě Real users je patrné, že Novinky.cz se stabilně drží nad průměrem zpravodajského segmentu („news“) a v některých měsících (zejména září a leden) tento průměr výrazně překonávají. To znamená, že nejen kopírují sezónní růst zpravodajství, ale dokážou ho zesílit ve svůj prospěch. Super.cz se dlouhodobě pohybuje nad průměrem bulvárního segmentu („tabloid“), což potvrzuje silnou pozici v rámci této kategorie. Sport.cz je naopak většinu roku pod úrovní „news“ segmentu, ale vykazuje výrazný jednorázový nárůst v únoru, což odpovídá sezónnímu vlivu konkrétních sportovních událostí.

U ATS je rozdíl ještě výraznější. Novinky.cz výrazně převyšují průměr zpravodajského segmentu ve všech měsících, často i více než dvojnásobně. To potvrzuje jejich klíčovou konkurenční výhodu – schopnost udržet uživatele na webu výrazně déle než trh. Super.cz i Sport.cz se pohybují zhruba na úrovni nebo mírně nad svými segmenty, přičemž Sport.cz má tendenci růst v obdobích vyšší sportovní aktivity (leden–únor). Tabloidní segment jako celek vykazuje nejnižší hodnoty ATS, což odpovídá rychlé a fragmentované konzumaci obsahu.

U Views per real user se ukazuje jiný vzorec. Zpravodajský segment („news“) dosahuje relativně vysokých hodnot a Novinky.cz se pohybují nad jeho průměrem, ale rozdíl není tak výrazný jako u ATS. To znamená, že jejich dominance stojí více na čase než na počtu zobrazených stránek. Naopak Sport.cz a Super.cz se drží blízko svých segmentových průměrů, bez výrazného odchýlení. Tabloidní segment opět vykazuje nižší hodnoty a větší volatilitu.
`,
      },
      {
        type: "chart",
        title: "Porovnání portálů podle standardizovaných hodnot",
        flourishId: "28822783",
        desktopHeight: 800,
      },
      {
        type: "text",
        content: `
Z-score pohled umožňuje srovnat portály relativně vůči trhu a ukazuje, kde jednotliví hráči skutečně outperformují nebo naopak zaostávají.

Novinky.cz zde jednoznačně dominují napříč většinou metrik. Výrazně nadprůměrné hodnoty mají jak v počtu uživatelů, tak zejména v ATS a také v čase na stránku i návštěvu. To potvrzuje, že jejich síla není jen v dosahu, ale především v kvalitě engagementu. Jako jediný hráč kombinují nadprůměr ve všech klíčových dimenzích, což z nich dělá nejvyváženější a zároveň nejvýkonnější portál na trhu.

iDNES.cz vykazuje odlišný profil. Je silně nadprůměrný v počtu zobrazení na uživatele (nejvyšší hodnota v datasetu) a také v čase na návštěvu, ale výrazně zaostává v čase na stránku. To naznačuje model založený na rychlé konzumaci velkého množství obsahu. Engagement je zde tedy spíše kvantitativní než kvalitativní.

Super.cz a Sport.cz se pohybují mírně nad průměrem v engagement metrikách, ale bez výrazné dominance. Super.cz má vyvážený výkon napříč metrikami, zatímco Sport.cz je silnější v čase na stránku, ale nedosahuje nadprůměrného dosahu. Oba portály představují stabilní, ale ne dominantní hráče ve svých segmentech.

Deník.cz má nadprůměrný dosah, ale výrazně podprůměrný engagement, což ukazuje na slabší schopnost udržet uživatele. Naopak Blesk.cz má relativně silný čas na návštěvu, ale slabší výkon v ostatních metrikách.

Extra.cz a Expres.cz patří mezi nejslabší hráče, kdy se pohybují pod průměrem téměř ve všech ukazatelích. Zejména Expres.cz výrazně zaostává jak v dosahu, tak v engagementu.
`,
      },
    ],
  },
  {
    id: "statisticka-analyza",
    title: "Statistická analýza",
    route: "/statisticka-analyza",
    nextSectionId: "vystupy",
    blocks: [
      { type: "chart", title: "Spearmanova korelační matice", flourishId: "28823021", desktopHeight: 850 },
      {
        type: "text",
        content: `
Spearmanova korelační matice ukazuje sílu vztahu mezi jednotlivými metrikami na základě jejich pořadí (nikoliv absolutních hodnot). Hodnoty se pohybují od -1 do 1, kde 1 znamená velmi silnou pozitivní vazbu (metriky rostou společně), 0 znamená žádnou vazbu a -1 by znamenalo opačný vztah. V praxi to umožňuje identifikovat, které ukazatele se vyvíjejí podobně a které naopak zachycují odlišné aspekty výkonu.

Samotná matice ukazuje silné vazby mezi objemovými metrikami a engagementem, ale zároveň potvrzuje, že nejde o totožné jevy.

Nejsilnější korelace se objevují mezi metrikami spojenými s celkovým výkonem webu. Počet návštěv (Visits) a celkový čas (Time) jsou téměř perfektně korelované (0,97), což je očekávatelné, protože více návštěv přirozeně generuje více času. Podobně velmi silná je vazba mezi Views a Views share (0,99), což potvrzuje, že podíl na trhu zobrazení je prakticky přímým odrazem absolutního objemu.

Real users mají téměř perfektní korelaci s Reach a Audience share (0,998), což ukazuje, že tyto metriky jsou v podstatě různé pohledy na totéž – velikost publika. Pro interpretaci to znamená, že není nutné je analyzovat odděleně.

Zajímavější je vztah mezi dosahem a engagementem. Korelace mezi Real users a ATS je pouze středně silná (0,61), což potvrzuje, že velký web nemusí automaticky znamenat vysoký engagement. To je klíčové zjištění pro interpretaci rozdílů mezi Novinky.cz a iDNES.cz.

Metriky engagementu mezi sebou naopak silně souvisejí. ATS má velmi silnou vazbu na Visits per real user (0,96) a také na Time a Share of time (0,92+). To znamená, že delší čas na uživatele je primárně tažen opakovanými návštěvami a celkovou aktivitou, nikoli pouze delším čtením jednotlivých článků.

Time per view má relativně slabší vazby na většinu ostatních metrik, zejména na Views per real user (0,14). To naznačuje, že hloubka prohlížení (kolik stránek uživatel projde) a kvalita čtení (jak dlouho na stránce zůstane) jsou do značné míry nezávislé dimenze.
`,
      },
      { type: "chart", title: "Testování dat", flourishId: "28829841", desktopHeight: 350, mobileHeight: 350 },
      {
        type: "text",
        content: `
Shapiro–Wilkův test byl použit k ověření, zda mají analyzované metriky normální rozdělení. Výsledky ukazují, že většina dat je normální, s výjimkou Real users u Sport.cz, kde byla normalita porušena. Proto byl použit Kruskal–Wallisův test jako neparametrická alternativa, která nevyžaduje normální rozdělení dat a umožňuje porovnat rozdíly mezi weby.

Výstupy ukazují, že u všech tří metrik existují statisticky významné rozdíly mezi portály (p < 0,05). Nejvýraznější rozdíly jsou u Real users, což potvrzuje silnou diferenciaci trhu z pohledu dosahu. Významné rozdíly jsou ale i u ATS a Views per real user, tedy i v oblasti engagementu.

Závěr je, že rozdíly mezi jednotlivými portály nejsou náhodné, ale systematické a statisticky průkazné, a to jak v dosahu, tak v chování uživatelů.
`,
      },
      {
        type: "text",
        title: "Čas strávený na webu podle typu webu",
        content: `
Pro analýzu byl použit lineární model (OLS), který zkoumá, jak se liší průměrný čas strávený na webu (ATS) mezi jednotlivými portály. Cílem bylo kvantifikovat rozdíly mezi weby a ověřit, zda jsou statisticky významné.

Výsledky ukazují velmi vysokou vysvětlující schopnost modelu (R² = 0,985), což znamená, že rozdíly mezi portály téměř plně vysvětlují variabilitu v ATS. Jinými slovy, typ webu (konkrétní portál) je klíčovým faktorem určujícím, kolik času na něm uživatelé tráví.

Všechny koeficienty jsou statisticky významné (p < 0,01), což potvrzuje, že rozdíly mezi jednotlivými weby nejsou náhodné. Referenční hodnotou je aktualne.cz a ostatní portály jsou interpretovány vůči němu. Novinky.cz výrazně vyčnívají s náskokem přibližně +4700 sekund, což potvrzuje jejich dominantní pozici v engagementu. Výrazně nadprůměrné hodnoty mají také iDNES.cz, Sport.cz a Super.cz. Naopak Expres.cz, Extra.cz a Deník.cz dosahují výrazně nižších hodnot.
`,
      },
      { type: "chart", flourishId: "28830444" },
      {
        type: "text",
        content: `
Boxplot potvrzuje výsledky modelu a zároveň ukazuje rozložení hodnot v čase. Novinky.cz mají nejen nejvyšší hodnoty, ale také relativně konzistentní výkon bez výrazných propadů, což potvrzuje stabilní engagement. iDNES.cz, Sport.cz a Super.cz tvoří kompaktní skupinu s podobným rozsahem hodnot a mírnou variabilitou. Naopak weby s nízkým engagementem (Deník.cz, Extra.cz, Expres.cz) se pohybují v nižších pásmech bez výrazných překryvů s výkonnějšími hráči. Celkově je patrné, že rozdíly mezi skupinami nejsou jen průměrové, ale i distribuční, což posiluje závěry z regresního modelu.
`,
      },
      {
        type: "text",
        title: "Hloubka prohlížení jednotlivých webů",
        content: `
Analýza hloubky prohlížení (Views per real user) ukazuje, jak intenzivně uživatelé konzumují obsah jednotlivých webů.

Model na úrovni jednotlivých portálů potvrzuje, že rozdíly jsou výrazné a systematické (R² = 0,94). Referenční hodnotou jsou Novinky.cz (66,3 zobrazení na uživatele). Jediným webem, který tuto úroveň překonává, je iDNES.cz (+21,8), což potvrzuje jeho strategii založenou na maximální hloubce prohlížení. Naopak všechny ostatní portály za Novinky.cz výrazně zaostávají, často o 20–50 zobrazení na uživatele. Nejnižší hodnoty mají Expres.cz a obsahově slabší hráči, což odpovídá nižší schopnosti udržet uživatele v rámci webu.

Pohled na skupinu Borgis vs. konkurence ukazuje, že portály Borgis mají v průměru o +15,5 zobrazení na uživatele více než zbytek trhu, a tento rozdíl je statisticky významný (p = 0,001). Přesto je vysvětlující síla modelu nízká (R² = 0,096), což znamená, že samotná příslušnost ke skupině Borgis vysvětluje jen malou část variability a klíčovou roli hraje konkrétní portál.
`,
      },
      { type: "chart", title: "Engagement index a Size index", flourishId: "28831802" },
      {
        type: "text",
        content: `
Pro zjednodušení interpretace byl vytvořen Engagement index a Size index, které agregují více metrik do jednoho ukazatele. Engagement index kombinuje metriky chování uživatelů (čas, hloubka prohlížení, návratnost), zatímco Size index zachycuje velikost a tržní dosah (uživatelé, návštěvy, podíly). Oba indexy jsou standardizované, takže umožňují přímé srovnání mezi weby.

Výsledky ukazují velmi jasné rozdělení trhu. Novinky.cz dominují v obou dimenzích – mají nejvyšší Size index i Engagement index, což potvrzuje jejich unikátní pozici kombinující silný dosah i vysoký engagement. iDNES.cz je druhý největší hráč, ale jeho engagement je výrazně slabší než u Novinek, což odpovídá jeho modelu založenému více na objemu než na kvalitě interakce.

Super.cz a Sport.cz se nachází ve střední části – mají pozitivní engagement, ale omezenější dosah. To naznačuje potenciál růstu, pokud by dokázaly škálovat svůj obsah na větší publikum. Naopak zbytek trhu (Blesk.cz, Aktuálně.cz, Deník.cz, Extra.cz, Expres.cz) se pohybuje pod průměrem v obou dimenzích, přičemž zejména Expres.cz výrazně zaostává.
`,
      },
      { type: "chart", title: "Identifikace overperformerů a underperformerů", flourishId: "28832791" },
      {
        type: "text",
        content: `
Tato analýza sleduje, zda weby dosahují očekávaného výkonu vzhledem ke své velikosti, nebo zda ji překonávají (overperformují), případně zaostávají (underperformují). Nejprve byl odhadnut vztah mezi velikostí webu (Size index) a metrikami engagementu (ATS a Views per real user). Následně byla vypočtena rezidua, tedy rozdíl mezi skutečnou a očekávanou hodnotou. Standardizovaná rezidua (z-score) pak umožňují přímé srovnání mezi weby.

V případě ATS model vysvětluje velkou část variability (R² = 0,81), což znamená, že větší weby mají obecně vyšší čas na uživatele. Přesto se objevují výrazné odchylky. Největším overperformerem je Sport.cz, který dosahuje výrazně vyššího času, než by odpovídalo jeho velikosti. Nad očekáváním se pohybují také Novinky.cz, Blesk.cz a Super.cz. Naopak největší underperformance vykazují Deník.cz a iDNES.cz, které mají výrazně nižší ATS, než by odpovídalo jejich velikosti.

U Views per real user je vztah slabší (R² = 0,60), což znamená, že hloubka prohlížení je méně závislá na velikosti webu. Nejvýraznějším overperformerem je iDNES.cz, který výrazně překonává očekávání a potvrzuje svou strategii založenou na vysokém počtu zobrazení na uživatele. Nadprůměrně si vedou také Extra.cz, Blesk.cz a Sport.cz. Naopak Novinky.cz zde mírně zaostávají za očekáváním, což potvrzuje, že jejich síla spočívá spíše v čase než v počtu zobrazených stránek. Největší underperformance vykazuje Deník.cz a Aktuálně.cz.
`,
      },
      {
        type: "chart-toggle",
        title: "Vývoj overperformerů a underperformerů",
        variants: [
          { label: "ATS", flourishId: "28832870" },
          { label: "PV/RU", flourishId: "28832955" },
        ],
      },
      {
        type: "text",
        content: `
Dynamika reziduí v čase ukazuje, že overperformance a underperformance nejsou statické, ale mění se v závislosti na období a obsahu.

U ATS je patrné, že Sport.cz si dlouhodobě drží nadprůměrnou výkonnost vzhledem ke své velikosti, s výraznými špičkami zejména na přelomu roku. Novinky.cz zůstávají stabilním overperformerem, i když s mírnými výkyvy, zejména ke konci roku, kde se jejich náskok dočasně snižuje. Super.cz a Blesk.cz se pohybují mírně nad očekáváním bez výrazných extrémů. Naopak iDNES.cz se po většinu období nachází pod očekáváním, což potvrzuje slabší výkon v čase na uživatele vzhledem k jeho velikosti. Největší a stabilní underperformance vykazuje Deník.cz.

U Views per real user je situace odlišná. iDNES.cz dlouhodobě výrazně overperformuje, což potvrzuje jeho konzistentní strategii maximalizace počtu zobrazení na uživatele. Blesk.cz a Sport.cz se pohybují mírně nad očekáváním, zatímco Super.cz kolísá kolem průměru. Novinky.cz se většinu času nachází pod očekáváním, což opět potvrzuje, že jejich síla leží spíše v délce konzumace než v její hloubce. Nejvýraznější underperformance je opět u Deník.cz a také u Aktuálně.cz.

Z časového pohledu je patrné, že výkyvy často souvisí se sezónností a konkrétními obsahovými impulzy. Například špičky u Sport.cz odpovídají sportovním událostem, zatímco propady u zpravodajských webů se objevují v méně exponovaných obdobích. Celkově ale platí, že relativní pozice jednotlivých webů je v čase poměrně stabilní, což potvrzuje, že rozdíly jsou strukturální, nikoliv náhodné.
`,
      },
    ],
  },
  {
    id: "vystupy",
    title: "Výstupy",
    route: "/vystupy",
    blocks: [
      {
        type: "swot-grid",
        title: "Silné a slabé stránky portálů",
        items: [
          {
            name: "Novinky.cz",
            strengths: [
              "Nejvyšší dosah i engagement na trhu",
              "Výrazně nejvyšší ATS (schopnost dlouhodobě udržet uživatele)",
              "Stabilní výkon v čase, dobře zvládnutá sezónnost",
              "Nadprůměrná hloubka prohlížení",
            ],
            weaknesses: [
              "Pod očekáváním ve Views per real user vzhledem k velikosti",
              "Slabší výkon v hloubce prohlížení než iDNES.cz",
              "Prostor pro lepší monetizaci engagementu (více pageviews na uživatele)",
            ],
          },
          {
            name: "Sport.cz",
            strengths: [
              "Silný engagement vzhledem k velikosti (ATS overperformance)",
              "Nadprůměrná hloubka prohlížení",
              "Schopnost využít sezónní špičky (sportovní události)",
              "Stabilně nad očekáváním v engagement metrikách",
            ],
            weaknesses: [
              "Nižší celkový dosah",
              "Vysoká závislost na sezónnosti a konkrétních událostech",
              "Méně stabilní výkon než zpravodajské portály",
            ],
          },
          {
            name: "Super.cz",
            strengths: [
              "Vyvážený výkon napříč metrikami",
              "Nadprůměrný engagement v rámci bulvárního segmentu",
              "Stabilní výkon bez výrazných výkyvů",
              "Dobrá hloubka prohlížení vzhledem k typu obsahu",
            ],
            weaknesses: [
              "Omezený dosah oproti hlavním hráčům",
              "Bez výrazné konkurenční výhody v žádné metrice",
              "Nadprůměrné výsledky ale bez dominance",
              "Prostor pro posílení jak RU tak engagementu",
            ],
          },
        ],
      },
      {
        type: "recommendation-grid",
        title: "Doporučení",
        items: [
          {
            title: "Zvýšit hloubku prohlížení u Novinky.cz",
            content: "Posílit doporučování obsahu a personalizaci pro vyšší PV/RU.",
            context: "Novinky.cz mají nejvyšší ATS, ale nižší PV/RU než iDNES.cz.",
            proposal: "Posílit doporučování obsahu, interní prolinkování a personalizaci homepage.",
            goal: "Více zobrazení na uživatele bez nutnosti růstu návštěvnosti.",
          },
          {
            title: "Snížit sezónnost Sport.cz",
            content: "Stabilizovat výkon mimo špičky sportovních událostí.",
            context: "Sport.cz má silný engagement, ale výkon výrazně kolísá podle sportovních událostí.",
            proposal: "Rozšířit pravidelný obsah (analýzy, podcasty, přestupy) a využít push notifikace.",
            goal: "Stabilnější návštěvnost během roku.",
          },
          {
            title: "Posílit unikátní obsah Super.cz",
            content: "Vybudovat konkurenční výhodu přes exkluzivitu a seriálovost.",
            context: "Super.cz je stabilní, ale bez výrazné konkurenční výhody.",
            proposal: "Více exkluzivního a seriálového obsahu, práce s návratností uživatelů.",
            goal: "Zvýšení loajality a engagementu.",
          },
          {
            title: "Převzít UX prvky z iDNES.cz",
            content: "Aplikovat osvědčené UX vzorce pro vyšší hloubku prohlížení.",
            context: "iDNES.cz výrazně outperformuje v PV/RU.",
            proposal: "Využít silnější prolinkování, galerie a obsahové rozcestníky.",
            goal: "Zvýšení hloubky prohlížení napříč portfoliem Borgis.",
          },
          {
            title: "Zvýšit návratnost uživatelů",
            content: "Budovat opakované návštěvy přes personalizaci a notifikace.",
            context: "ATS silně souvisí s opakovanými návštěvami.",
            proposal: "Více personalizace, newsletterů a push notifikací.",
            goal: "Vyšší loajalita a delší čas strávený na webu.",
          },
        ],
      },
      {
        type: "author-bio",
        name: "Milan Pštross",
        role: "Datový analytik",
        email: "milan.pstross@gmail.com",
        linkedin: "https://www.linkedin.com/in/milanpstross/",
        github: "https://github.com/ArcanisX7",
        photo: milanPhoto,
      },
    ],
  },
];
