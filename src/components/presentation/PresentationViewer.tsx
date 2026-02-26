import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import SlideCover from "./slides/SlideCover";
import SlideCrisis from "./slides/SlideCrisis";
import SlideHomeOffice from "./slides/SlideHomeOffice";
import SlideWeight from "./slides/SlideWeight";
import SlideImpact from "./slides/SlideImpact";
import SlideAccident from "./slides/SlideAccident";
import SlidePrepared from "./slides/SlidePrepared";
import SlideValue from "./slides/SlideValue";
import SlideMAIS from "./slides/SlideMAIS";
import SlideBio from "./slides/SlideBio";
import SlideClients from "./slides/SlideClients";
import SlideMethodology from "./slides/SlideMethodology";
import SlideWorkshops from "./slides/SlideWorkshops";
import SlideSolutions from "./slides/SlideSolutions";
import SlideContact from "./slides/SlideContact";

const slides = [
  SlideCover, SlideCrisis, SlideHomeOffice, SlideWeight, SlideImpact,
  SlideAccident, SlidePrepared, SlideValue, SlideMAIS, SlideBio,
  SlideClients, SlideMethodology, SlideWorkshops, SlideSolutions, SlideContact,
];

const PresentationViewer = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth: w, clientHeight: h } = containerRef.current;
    setScale(Math.min(w / 1920, h / 1080));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
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
      className="slide-container w-screen h-screen cursor-none"
      style={{ background: "hsl(220 50% 5%)" }}
      onMouseMove={handleMouseMove}
      onClick={next}
    >
      {/* Scaled slide */}
      <div className="slide-wrapper" style={{ transform: `scale(${scale})` }} key={current}>
        <CurrentSlide />
      </div>

      {/* Controls overlay */}
      <div
        className="absolute inset-0 z-50 pointer-events-none transition-opacity duration-500"
        style={{ opacity: showControls ? 1 : 0, cursor: "default" }}
      >
        {/* Bottom bar */}
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
          <button onClick={(e) => {
            e.stopPropagation();
            isFullscreen ? document.exitFullscreen() : containerRef.current?.requestFullscreen();
          }} className="p-[6px] rounded-full" style={{ color: "hsl(40 20% 90%)" }}>
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>

        {/* Slide thumbnails strip */}
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
