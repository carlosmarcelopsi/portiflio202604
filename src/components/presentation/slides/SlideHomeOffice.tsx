import SlideLayout from "../SlideLayout";

const SlideHomeOffice = () => (
  <SlideLayout backgroundImage="/images/homeoffice-bg.jpg" overlay="gradient-left">
    <div className="flex flex-col h-full">
      <div className="flex-1 flex">
        <div className="w-[55%] flex flex-col justify-center px-[120px]">
          <h2 className="slide-title-lg text-gold-gradient mb-[32px] animate-fade-in-up">
            Seus times entregam?
          </h2>
          <h2 className="slide-title animate-fade-in-up delay-200" style={{ color: "hsl(40 20% 95%)" }}>
            Home office também<br />afeta a saúde mental
          </h2>
          <div className="w-[80px] h-[3px] my-[40px] animate-fade-in-up delay-300" style={{ background: "hsl(40 70% 55%)" }} />
          <div className="space-y-[24px]">
            {[
              { pct: "83%", text: "dos trabalhadores relataram sintomas psicológicos" },
              { pct: "51,5%", text: "apresentam ansiedade" },
              { pct: "47%", text: "com dificuldade de concentração" },
              { pct: "39,6%", text: "com sensação de exaustão ou burnout" },
              { pct: "43%", text: "sentem falta de suporte emocional das empresas" },
            ].map((item, i) => (
              <div key={i} className={`flex items-baseline gap-[20px] animate-fade-in-up delay-${(i + 4) * 100}`}>
                <span className="text-gold-gradient font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: 48 }}>{item.pct}</span>
                <span className="slide-body" style={{ color: "hsl(220 10% 70%)" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-[120px] pb-[40px] animate-fade-in-up delay-700">
        <div className="slide-label text-gold-gradient">Revista Exame · Fev 2026</div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideHomeOffice;
