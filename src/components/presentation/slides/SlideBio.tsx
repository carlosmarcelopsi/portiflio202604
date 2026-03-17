import SlideLayout from "../SlideLayout";

const SlideBio = () => (
  <SlideLayout backgroundImage="/images/foto-apresentacao-02.png" overlay="dark">
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-end pb-[80px] px-[120px]">
        <div className="slide-label text-gold-gradient mb-[20px] animate-fade-in-up" style={{ fontSize: 24 }}>Quem sou</div>
        <h2 className="animate-fade-in-up delay-100" style={{ fontFamily: "'Playfair Display', serif", fontSize: 84, fontWeight: 700, lineHeight: 1.1, color: "hsl(40 20% 95%)" }}>
          Carlos Marcelo
        </h2>
        <p className="animate-fade-in-up delay-200" style={{ color: "hsl(40 70% 55%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 30, fontStyle: "italic", marginBottom: 36, marginTop: 8 }}>
          Estrategista em liderança, saúde mental e comportamento
        </p>
        <div className="grid grid-cols-2 gap-x-[60px] gap-y-[20px]">
          {[
            ["Graduação em Psicologia e Teologia", "MBA em Administração e Gestão do Conhecimento"],
            ["Pós-graduando em Psicologia Organizacional e Gestão de Pessoas", "Terapia Cognitivo Comportamental"],
            ["Executive Coaching", "Psicologia Positiva"],
            ["EMDR e Brainspotting"],
          ].flat().map((item, i) => (
            <div key={i} className={`flex items-center gap-[14px] animate-fade-in-up delay-${Math.min((i + 3) * 100, 700)}`}>
              <div className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ background: "hsl(40 70% 55%)" }} />
              <span style={{ color: "hsl(220 10% 80%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 28 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideBio;
