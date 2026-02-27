import SlideLayout from "../SlideLayout";

const SlideWorkshops = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full px-[120px]" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      <div className="slide-label text-gold-gradient mb-[16px] animate-fade-in-up">Soluções</div>
      <h2 className="slide-title text-center animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
        Palestras e <span className="text-gold-gradient">Workshops</span>
      </h2>
      <div className="w-[80px] h-[3px] my-[40px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />
      <div className="grid grid-cols-3 gap-[30px] w-full max-w-[1600px]">
        {[
          { icon: "🧠", title: "Gestão da Pressão", desc: "Estresse, saúde e bem-estar" },
          { icon: "🛡️", title: "Saúde Mental", desc: "E prevenção de acidentes" },
          { icon: "📱", title: "Dependência Digital", desc: "E seus reflexos no trabalho e na vida" },
          { icon: "⚠️", title: "Saúde e Segurança", desc: "O papel de cada um" },
          { icon: "💰", title: "Saúde Mental", desc: "E vida financeira" },
          { icon: "⚖️", title: "Na Corda Bamba", desc: "Equilíbrio entre vida pessoal e trabalho" },
        ].map((item, i) => (
          <div key={i} className={`p-[40px] rounded-[16px] animate-fade-in-up delay-${(i + 2) * 100}`}
            style={{ background: "hsl(220 20% 14%)", border: "1px solid hsl(220 15% 22%)" }}>
            <div className="text-[48px] mb-[20px]">{item.icon}</div>
            <div className="text-gold-gradient font-bold mb-[12px]" style={{ fontFamily: "'Playfair Display', serif", fontSize: 30 }}>{item.title}</div>
            <div style={{ color: "hsl(220 10% 55%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 24 }}>{item.desc}</div>
          </div>
        ))}
      </div>
      <p className="mt-[40px] animate-fade-in-up delay-700" style={{ color: "hsl(40 70% 55% / 0.6)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 22, fontStyle: "italic" }}>
        * Conteúdo customizado sob demanda
      </p>
    </div>
  </SlideLayout>
);

export default SlideWorkshops;
