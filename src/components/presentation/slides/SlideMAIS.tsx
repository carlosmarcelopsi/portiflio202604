import SlideLayout from "../SlideLayout";

const SlideMAIS = () => (
  <SlideLayout backgroundImage="/images/hero-bg.jpg" overlay="dark">
    <div className="flex h-full">
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
      <div className="w-[500px] flex items-end justify-center animate-fade-in delay-300">
        <img src="/images/profile-casual.jpg" alt="Carlos Marcelo" className="h-[850px] object-cover object-top rounded-t-[20px]" />
      </div>
    </div>
  </SlideLayout>
);

export default SlideMAIS;
