import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Download, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import SlideCover from "./slides/SlideCover";
import SlideCrisis from "./slides/SlideCrisis";
import SlideHomeOffice from "./slides/SlideHomeOffice";
import SlideWeight from "./slides/SlideWeight";
import SlidePrepared from "./slides/SlidePrepared";
import SlideLeaders from "./slides/SlideLeaders";
import SlideMAIS from "./slides/SlideMAIS";
import SlideMethodology from "./slides/SlideMethodology";
import SlideBio from "./slides/SlideBio";
import SlideClients from "./slides/SlideClients";
import SlideTestimonials from "./slides/SlideTestimonials";
import SlideSolutions from "./slides/SlideSolutions";
import SlideWorkshops from "./slides/SlideWorkshops";
import SlideContact from "./slides/SlideContact";

const slides = [
  SlideCover,        // 1
  SlideCrisis,       // 2
  SlideHomeOffice,   // 3
  SlideWeight,       // 4
  SlidePrepared,     // 5
  SlideLeaders,      // 6
  SlideMAIS,         // 7
  SlideMethodology,  // 8
  SlideBio,          // 9
  SlideClients,      // 10
  SlideTestimonials, // 11 (NEW)
  SlideSolutions,    // 12
  SlideWorkshops,    // 13
  SlideContact,      // 14
];

const PresentationViewer = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(0.5);
  const [showControls, setShowControls] = useState(true);
  const [exporting, setExporting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  const exportPDF = useCallback(async () => {
    setExporting(true);
    try {
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080] });
      const offscreen = document.createElement("div");
      offscreen.style.cssText = "position:fixed;left:-9999px;top:0;width:1920px;height:1080px;overflow:hidden;z-index:-1;";
      document.body.appendChild(offscreen);

      for (let i = 0; i < slides.length; i++) {
        if (i > 0) pdf.addPage([1920, 1080], "landscape");
        const SlideComp = slides[i];
        const { createRoot } = await import("react-dom/client");
        const wrapper = document.createElement("div");
        wrapper.style.cssText = "width:1920px;height:1080px;position:relative;";
        offscreen.innerHTML = "";
        offscreen.appendChild(wrapper);

        await new Promise<void>((resolve) => {
          const root = createRoot(wrapper);
          root.render(<SlideComp />);
          setTimeout(() => resolve(), 800);
        });

        const canvas = await html2canvas(wrapper, {
          width: 1920, height: 1080, scale: 1,
          useCORS: true, allowTaint: true,
          backgroundColor: null,
        });
        const imgData = canvas.toDataURL("image/jpeg", 0.92);
        pdf.addImage(imgData, "JPEG", 0, 0, 1920, 1080);
      }

      document.body.removeChild(offscreen);
      pdf.save("apresentacao-mental-mais.pdf");
    } catch (err) {
      console.error("PDF export error:", err);
    } finally {
      setExporting(false);
    }
  }, []);

  const updateScale = useCallback(() => {
    const w = containerRef.current?.clientWidth || window.innerWidth;
    const h = containerRef.current?.clientHeight || window.innerHeight;
    const s = Math.min(w / 1920, h / 1080);
    setScale(s > 0.01 ? s : 0.5);
  }, []);

  useEffect(() => {
    updateScale();
    const t = setTimeout(updateScale, 100);
    window.addEventListener("resize", updateScale);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateScale);
    };
  }, [updateScale]);

  useEffect(() => {
    const onFS = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFS);
    return () => document.removeEventListener("fullscreenchange", onFS);
  }, []);

  const next = useCallback(() => setCurrent(c => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && isFullscreen) document.exitFullscreen();
      if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        containerRef.current?.requestFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, isFullscreen]);

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 3000);
  };

  const CurrentSlide = slides[current];

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "hsl(220 50% 5%)",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onClick={next}
    >
      <div
        style={{
          position: "absolute",
          width: 1920,
          height: 1080,
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
        }}
        key={current}
      >
        <CurrentSlide />
      </div>

      <div
        className="absolute inset-0 z-50 pointer-events-none transition-opacity duration-500"
        style={{ opacity: showControls ? 1 : 0 }}
      >
        <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex items-center gap-[16px] pointer-events-auto"
          style={{ background: "hsl(220 20% 14% / 0.9)", borderRadius: 999, padding: "10px 24px", backdropFilter: "blur(12px)" }}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} disabled={current === 0}
            className="p-[6px] rounded-full transition-colors disabled:opacity-30"
            style={{ color: "hsl(40 20% 90%)" }}>
            <ChevronLeft size={24} />
          </button>
          <span style={{ color: "hsl(40 20% 90%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 16, minWidth: 60, textAlign: "center" }}>
            {current + 1} / {slides.length}
          </span>
          <button onClick={(e) => { e.stopPropagation(); next(); }} disabled={current === slides.length - 1}
            className="p-[6px] rounded-full transition-colors disabled:opacity-30"
            style={{ color: "hsl(40 20% 90%)" }}>
            <ChevronRight size={24} />
          </button>
          <div className="w-[1px] h-[20px] mx-[4px]" style={{ background: "hsl(220 15% 30%)" }} />
          <button onClick={(e) => { e.stopPropagation(); exportPDF(); }}
            disabled={exporting}
            className="p-[6px] rounded-full disabled:opacity-50" style={{ color: "hsl(40 20% 90%)" }}>
            {exporting ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
          </button>
          <button onClick={(e) => {
            e.stopPropagation();
            isFullscreen ? document.exitFullscreen() : containerRef.current?.requestFullscreen();
          }} className="p-[6px] rounded-full" style={{ color: "hsl(40 20% 90%)" }}>
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>

        <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 flex gap-[6px] pointer-events-auto">
          {slides.map((_, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className="w-[40px] h-[4px] rounded-full transition-all"
              style={{ background: i === current ? "hsl(40 70% 55%)" : "hsl(220 15% 30%)", transform: i === current ? "scaleY(1.5)" : "scaleY(1)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresentationViewer;
