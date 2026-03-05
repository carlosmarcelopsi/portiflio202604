import SlideLayout from "../SlideLayout";

const SlideBio = () => (
  <SlideLayout backgroundImage="/images/foto-apresentacao-02.png" overlay="dark">
    <div className="flex h-full">
      {/* Bio content - positioned to leave face visible */}
      <div className="flex-1 flex flex-col justify-end pb-[80px] px-[120px]">
        <div className="slide-label text-gold-gradient mb-[16px] animate-fade-in-up">Quem sou</div>
        <h2 className="slide-title animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
          Carlos Marcelo
        </h2>
        <p className="animate-fade-in-up delay-200" style={{ color: "hsl(40 70% 55%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 26, fontStyle: "italic", marginBottom: 30 }}>
          Estrategista em liderança, saúde mental e comportamento
        </p>
        <div className="flex flex-wrap gap-x-[60px] gap-y-[16px]">
          {[
            "Graduação em Psicologia e Teologia",
            "MBA em Administração e Gestão do Conhecimento",
            "Pós-graduando em Psicologia Organizacional",
            "Terapia Cognitivo Comportamental",
            "Executive Coaching",
            "Psicologia Positiva",
            "EMDR e Brainspotting",
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-[12px] animate-fade-in-up delay-${Math.min((i + 3) * 100, 700)}`}>
              <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ background: "hsl(40 70% 55%)" }} />
              <span style={{ color: "hsl(220 10% 80%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 24 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideBio;
