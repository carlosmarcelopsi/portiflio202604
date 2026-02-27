import SlideLayout from "../SlideLayout";

const SlideClients = () => (
  <SlideLayout backgroundImage="/images/tribuna.jpg" overlay="dark">
    <div className="flex flex-col h-full">
      <div className="px-[120px] pt-[80px]">
        <div className="slide-label text-gold-gradient mb-[16px] animate-fade-in-up">Trajetória</div>
        <h2 className="slide-title animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
          Experiências e <span className="text-gold-gradient">Clientes</span>
        </h2>
      </div>
      <div className="flex-1 flex items-center px-[120px] gap-[60px]">
        {/* Left: company logos as styled badges */}
        <div className="flex flex-col gap-[24px] w-[500px] animate-fade-in-up delay-200">
          <div className="flex flex-wrap gap-[16px] justify-center">
            {["VALE", "CESAN", "VIX LOGÍSTICA", "ESPIRAL ENGENHARIA", "CONCRENOVA"].map((name, i) => (
              <div key={i} className="px-[32px] py-[20px] rounded-[12px] text-center"
                style={{ background: "hsl(220 20% 14% / 0.9)", border: "1px solid hsl(40 70% 55% / 0.3)", backdropFilter: "blur(8px)", minWidth: 200 }}>
                <span style={{ color: "hsl(40 70% 55%)", fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, letterSpacing: 2 }}>{name}</span>
              </div>
            ))}
          </div>
          <p className="text-center animate-fade-in-up delay-400" style={{ color: "hsl(220 10% 60%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 24, fontStyle: "italic" }}>
            entre outros
          </p>
        </div>
        {/* Right: photo grid */}
        <div className="flex-1 grid grid-cols-2 gap-[16px] animate-fade-in delay-400">
          <img src="/images/vale.jpg" alt="Palestra Vale" className="w-full h-[280px] object-cover rounded-[12px]" />
          <img src="/images/cesan.jpg" alt="Palestra CESAN" className="w-full h-[280px] object-cover rounded-[12px]" />
          <img src="/images/espiral.jpg" alt="Espiral Engenharia" className="w-full h-[280px] object-cover rounded-[12px]" />
          <img src="/images/vix.jpg" alt="VIX Logística" className="w-full h-[280px] object-cover rounded-[12px]" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideClients;
