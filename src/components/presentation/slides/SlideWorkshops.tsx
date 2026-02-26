import SlideLayout from "../SlideLayout";

const SlideWorkshops = () => (
  <SlideLayout>
    <div className="flex h-full" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      <div className="flex-1 flex flex-col justify-center px-[120px]">
        <div className="slide-label text-gold-gradient mb-[24px] animate-fade-in-up">Soluções</div>
        <h2 className="slide-title animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
          Palestras e <span className="text-gold-gradient">Workshops</span>
        </h2>
        <div className="w-[80px] h-[3px] my-[40px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />
        <div className="space-y-[36px]">
          {[
            { title: "Gestão da Pressão", desc: "Estresse, saúde e prevenção de acidentes e seus reflexos no trabalho e na vida" },
            { title: "Saúde e Segurança", desc: "O papel de cada um e vida financeira" },
            { title: "Saúde Mental na Corda Bamba", desc: "Equilíbrio entre vida pessoal e trabalho" },
            { title: "Dependência Digital", desc: "Impactos da hiperconectividade na saúde mental" },
          ].map((item, i) => (
            <div key={i} className={`animate-fade-in-up delay-${(i + 3) * 100}`}>
              <div className="slide-body-lg font-bold text-gold-gradient">{item.title}</div>
              <div className="slide-body mt-[8px]" style={{ color: "hsl(220 10% 60%)" }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <p className="mt-[40px] animate-fade-in-up delay-700" style={{ color: "hsl(40 70% 55% / 0.6)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 22, fontStyle: "italic" }}>
          * Conteúdo customizado sob demanda
        </p>
      </div>
      <div className="w-[600px] flex items-center justify-center animate-fade-in delay-300">
        <img src="/images/vale.jpg" alt="Palestra Vale" className="w-[500px] h-[700px] object-cover rounded-[20px] shadow-2xl" />
      </div>
    </div>
  </SlideLayout>
);

export default SlideWorkshops;
