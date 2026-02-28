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
        {/* Left: company logos */}
        <div className="flex flex-col gap-[24px] w-[500px] animate-fade-in-up delay-200">
          <div className="flex flex-wrap gap-[16px] justify-center items-center">
            {[
              { src: "/images/logo-vale.png", alt: "Vale" },
              { src: "/images/logo-cesan.jpg", alt: "CESAN" },
              { src: "/images/logo-vix.png", alt: "VIX Logística" },
              { src: "/images/logo-espiral.jpg", alt: "Espiral Engenharia" },
            ].map((logo, i) => (
              <div key={i} className="px-[24px] py-[16px] rounded-[12px] flex items-center justify-center"
                style={{ background: "hsl(0 0% 100% / 0.95)", minWidth: 200, minHeight: 80 }}>
                <img src={logo.src} alt={logo.alt} className="h-[50px] object-contain" />
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
