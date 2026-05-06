import { useEffect, useRef } from "react";

interface FlourishEmbedProps {
  flourishId: string;
  className?: string;
  desktopHeight?: number;
  mobileHeight?: number;
}

export const FlourishEmbed = ({
  flourishId,
  className,
  desktopHeight = 600,
  mobileHeight = 480,
}: FlourishEmbedProps) => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "flourish-embed flourish-chart";
    wrap.setAttribute("data-src", `visualisation/${flourishId}`);

    const iframe = document.createElement("iframe");
    iframe.src = `https://flo.uri.sh/visualisation/${flourishId}/embed`;
    iframe.setAttribute("title", "Interactive or visual content");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute(
      "sandbox",
      "allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
    );
    iframe.style.width = "100%";
    const applyHeight = () => {
      iframe.style.height = window.matchMedia("(min-width: 768px)").matches
        ? `${desktopHeight}px`
        : `${mobileHeight}px`;
    };
    applyHeight();
    window.addEventListener("resize", applyHeight);

    wrap.appendChild(iframe);
    host.appendChild(wrap);

    return () => {
      window.removeEventListener("resize", applyHeight);
      if (host) host.innerHTML = "";
    };
  }, [flourishId, desktopHeight, mobileHeight]);

  return <div ref={hostRef} className={className} />;
};
