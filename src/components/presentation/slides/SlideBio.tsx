import SlideLayout from "../SlideLayout";

const SlideBio = () => (
  <SlideLayout>
    <div className="flex h-full" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      {/* Photo */}
      <div className="w-[600px] flex items-center justify-center animate-fade-in">
        <img src="/images/profile-nobg-04.png" alt="Carlos Marcelo" className="h-[900px] object-cover rounded-[20px]" />
      </div>
      {/* Bio */}
      <div className="flex-1 flex flex-col justify-center px-[80px]">
        <div className="slide-label text-gold-gradient mb-[16px] animate-fade-in-up">Quem sou</div>
        <h2 className="slide-title animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
          Carlos Marcelo
        </h2>
        <p className="slide-subtitle animate-fade-in-up delay-200" style={{ color: "hsl(40 70% 55%)" }}>Psicólogo</p>
        <p className="animate-fade-in-up delay-200" style={{ color: "hsl(40 70% 55%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 26, fontStyle: "italic", marginBottom: 40 }}>
          Estrategista em liderança, saúde mental e comportamento
        </p>
        <div className="space-y-[20px]">
          {[
            "Graduação em Psicologia e Teologia",
            "MBA em Administração e Gestão do Conhecimento",
            "Pós-graduando em Psicologia Organizacional",
            "Terapia Cognitivo Comportamental",
            "Psicologia Positiva",
            "EMDR e Brainspotting",
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-[16px] animate-fade-in-up delay-${Math.min((i + 3) * 100, 700)}`}>
              <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ background: "hsl(40 70% 55%)" }} />
              <span style={{ color: "hsl(220 10% 70%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 28 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideBio;
