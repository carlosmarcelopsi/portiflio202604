import SlideLayout from "../SlideLayout";

const clients = [
  { photo: "/images/vale.jpg", logo: "/images/logo-vale.png", alt: "Vale" },
  { photo: "/images/cesan.jpg", logo: "/images/logo-cesan.jpg", alt: "CESAN" },
  { photo: "/images/vix.jpg", logo: "/images/logo-vix.png", alt: "VIX Logística" },
  { photo: "/images/espiral.jpg", logo: "/images/logo-espiral.jpg", alt: "Espiral Engenharia" },
];

const SlideClients = () => (
  <SlideLayout backgroundImage="/images/tribuna.jpg" overlay="dark">
    <div className="flex flex-col h-full">
      <div className="px-[120px] pt-[80px] text-center">
        <div className="slide-label text-gold-gradient mb-[16px] animate-fade-in-up">Trajetória</div>
        <h2 className="slide-title animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
          Experiências e <span className="text-gold-gradient">Clientes</span>
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-center px-[100px]">
        <div className="grid grid-cols-2 gap-[24px] w-full max-w-[1500px] animate-fade-in delay-300">
          {clients.map((client, i) => (
            <div key={i} className="relative rounded-[16px] overflow-hidden" style={{ height: 300 }}>
              <img src={client.photo} alt={client.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center py-[24px]"
                style={{ background: "linear-gradient(0deg, hsl(220 40% 8% / 0.85) 0%, transparent 100%)" }}>
                <div className="px-[40px] py-[20px] rounded-[8px] flex items-center justify-center"
                  style={{ background: "hsl(0 0% 100% / 0.9)", minWidth: 280 }}>
                  <img src={client.logo} alt={client.alt} className="h-[100px] object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center pb-[30px] animate-fade-in-up delay-500" style={{ color: "hsl(220 10% 50%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 22, fontStyle: "italic" }}>
        entre outros
      </p>
    </div>
  </SlideLayout>
);

export default SlideClients;
