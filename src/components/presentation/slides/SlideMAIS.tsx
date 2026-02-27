import SlideLayout from "../SlideLayout";

const SlideMAIS = () => (
  <SlideLayout>
    <div className="flex h-full" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      <div className="flex-1 flex flex-col justify-center px-[120px]">
        <h2 className="slide-title animate-fade-in-up" style={{ color: "hsl(40 20% 95%)" }}>
          Sua organização<br />pode <span className="text-gold-gradient">M.A.I.S.</span>
        </h2>
        <div className="w-[80px] h-[3px] my-[40px] animate-fade-in-up delay-100" style={{ background: "hsl(40 70% 55%)" }} />
        <div className="space-y-[24px]">
          {[
            "Identificar e gerenciar riscos psicossociais — NR1",
            "Reduzir afastamentos — CID F",
            "Prevenir acidentes",
            "Minimizar riscos jurídicos e trabalhistas",
            "Aumentar a produtividade",
            "Multiplicar resultados",
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-[20px] animate-fade-in-up delay-${(i + 2) * 100}`}>
              <div className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ background: "hsl(40 70% 55%)" }} />
              <span className="slide-body" style={{ color: "hsl(40 20% 90%)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right side: photo behind ΨM monogram */}
      <div className="w-[500px] relative flex items-end justify-center animate-fade-in delay-300">
        <img
          src="/images/profile-nobg-02.png"
          alt="Carlos Marcelo"
          className="h-[850px] object-cover object-top"
          style={{ filter: "brightness(0.95)" }}
        />
        {/* ΨM monogram in bottom-right */}
        <div className="absolute bottom-[40px] right-[40px] z-20" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 100,
          fontWeight: 800,
          color: "hsl(40 70% 55% / 0.15)",
          lineHeight: 1,
        }}>
          ΨM
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideMAIS;
