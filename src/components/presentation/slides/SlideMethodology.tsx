import SlideLayout from "../SlideLayout";

const SlideMethodology = () => (
  <SlideLayout backgroundImage="/images/foto-apresentacao-01.png" overlay="dark">
    <div className="flex flex-col h-full px-[120px] pt-[80px]">
      <div className="text-center mb-[40px]">
        <div className="slide-label text-gold-gradient mb-[16px] animate-fade-in-up">Abordagem exclusiva</div>
        <h2 className="slide-title animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
          Metodologia <span className="text-gold-gradient">M.A.I.S.</span>
        </h2>
      </div>
      <div className="w-[80px] h-[3px] mx-auto mb-[60px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />
      <div className="flex gap-[40px] justify-center">
        {[
          { letter: "M", word: "Mapear", desc: "Diagnóstico e identificação dos riscos e necessidades" },
          { letter: "A", word: "Analisar", desc: "Análise profunda dos dados e contexto organizacional" },
          { letter: "I", word: "Intervir", desc: "Ações estratégicas e intervenções personalizadas" },
          { letter: "S", word: "Sustentar", desc: "Acompanhamento contínuo e sustentabilidade dos resultados" },
        ].map((item, i) => (
          <div key={i} className={`w-[360px] p-[48px] rounded-[20px] text-center animate-fade-in-up delay-${(i + 3) * 100}`}
            style={{ background: "hsl(220 20% 14% / 0.8)", border: "1px solid hsl(40 70% 55% / 0.2)" }}>
            <div className="text-gold-gradient mb-[16px]" style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 800 }}>{item.letter}</div>
            <div className="slide-body-lg font-bold mb-[12px]" style={{ color: "hsl(40 20% 95%)" }}>{item.word}</div>
            <div style={{ color: "hsl(220 10% 55%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 24 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideMethodology;
