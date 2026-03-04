import SlideLayout from "../SlideLayout";

const SlideCrisis = () => (
  <SlideLayout backgroundImage="/images/crisis-bg.jpg" overlay="gradient-left">
    <div className="flex h-full">
      <div className="w-[55%] flex flex-col justify-center px-[120px]">
        <h2 className="slide-title-lg text-gold-gradient mb-[32px] animate-fade-in-up">
          Seus líderes resolvem?
        </h2>
        <div className="slide-label text-gold-gradient mb-[24px] animate-fade-in-up delay-100">Dados do Portal G1</div>
        <h2 className="slide-title animate-fade-in-up delay-200" style={{ color: "hsl(40 20% 95%)" }}>
          Crise de saúde mental<br />no Brasil
        </h2>
        <div className="w-[80px] h-[3px] my-[40px] animate-fade-in-up delay-300" style={{ background: "hsl(40 70% 55%)" }} />
        <div className="space-y-[28px]">
          {[
            { stat: "+472 mil", text: "afastamentos por transtornos mentais em 2024" },
            { stat: "68%", text: "de aumento nos últimos 10 anos" },
            { stat: "R$ 3 bi", text: "de prejuízo com absenteísmo e presenteísmo" },
            { stat: "3 meses", text: "de afastamento médio por episódio depressivo" },
          ].map((item, i) => (
            <div key={i} className={`flex items-baseline gap-[20px] animate-fade-in-up delay-${(i + 4) * 100}`}>
              <span className="slide-body-lg font-bold text-gold-gradient whitespace-nowrap">{item.stat}</span>
              <span className="slide-body" style={{ color: "hsl(220 10% 70%)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideCrisis;
