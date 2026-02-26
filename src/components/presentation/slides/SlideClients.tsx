import SlideLayout from "../SlideLayout";

const SlideClients = () => (
  <SlideLayout>
    <div className="flex flex-col h-full" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      <div className="px-[120px] pt-[80px]">
        <div className="slide-label text-gold-gradient mb-[16px] animate-fade-in-up">Trajetória</div>
        <h2 className="slide-title animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
          Experiências e <span className="text-gold-gradient">Clientes</span>
        </h2>
      </div>
      {/* Client logos as text + photos grid */}
      <div className="flex-1 flex items-center px-[120px] gap-[60px]">
        {/* Left: client names */}
        <div className="flex flex-wrap gap-[16px] w-[500px] animate-fade-in-up delay-200">
          {["Vale", "CESAN", "TV Tribuna", "Espiral Eng.", "VIX Logística", "Multivix", "Tecnowatt", "BIM", "Aracruz", "Árvore da Vida", "Mimoso do Sul"].map((name, i) => (
            <div key={i} className="px-[24px] py-[14px] rounded-full" style={{ border: "1px solid hsl(40 70% 55% / 0.3)", background: "hsl(220 20% 14%)" }}>
              <span style={{ color: "hsl(40 20% 90%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 22, fontWeight: 500 }}>{name}</span>
            </div>
          ))}
        </div>
        {/* Right: photo grid */}
        <div className="flex-1 grid grid-cols-2 gap-[16px] animate-fade-in delay-400">
          <img src="/images/cesan.jpg" alt="Palestra CESAN" className="w-full h-[280px] object-cover rounded-[12px]" />
          <img src="/images/tribuna.jpg" alt="TV Tribuna" className="w-full h-[280px] object-cover rounded-[12px]" />
          <img src="/images/espiral.jpg" alt="Espiral Engenharia" className="w-full h-[280px] object-cover rounded-[12px]" />
          <img src="/images/vix.jpg" alt="VIX Logística" className="w-full h-[280px] object-cover rounded-[12px]" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideClients;
