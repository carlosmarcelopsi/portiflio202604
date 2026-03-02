import SlideLayout from "../SlideLayout";

const SlidePrepared = () => (
  <SlideLayout backgroundImage="/images/industrial-workers-pensive.jpg" overlay="gradient-left">
    <div className="flex h-full">
      <div className="w-[60%] flex flex-col justify-center px-[120px]">
        <h2 className="slide-title animate-fade-in-up" style={{ color: "hsl(40 20% 95%)" }}>
          Sua empresa está preparada para os desafios da <span className="text-gold-gradient">NOVA NR-1</span>?
        </h2>
        <div className="w-[80px] h-[3px] my-[50px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />
        <div className="space-y-[40px]">
          {[
            "Já identificou e avaliou os riscos psicossociais, com integração e atualização contínua do PGR?",
            "Tem um plano de ação com medidas de prevenção e cuidado, com implementação estruturada e eficácia comprovada?",
          ].map((item, i) => (
            <div key={i} className={`flex items-start gap-[20px] animate-fade-in-up delay-${(i + 3) * 100}`}>
              <div className="w-[12px] h-[12px] rounded-full flex-shrink-0 mt-[12px]" style={{ background: "hsl(40 70% 55%)" }} />
              <span className="slide-body-lg" style={{ color: "hsl(40 20% 90%)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlidePrepared;
