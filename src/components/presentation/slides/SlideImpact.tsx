import SlideLayout from "../SlideLayout";

const SlideImpact = () => (
  <SlideLayout backgroundImage="/images/accident-bg.jpg" overlay="dark">
    <div className="flex flex-col items-center justify-center h-full px-[100px]">
      <div className="text-center animate-scale-in mb-[40px]">
        <div className="slide-label text-gold-gradient mb-[16px]">Você sabia?</div>
        <h2 className="slide-title" style={{ color: "hsl(40 20% 95%)" }}>
          Qual é o <span className="text-gold-gradient">IMPACTO</span>…
        </h2>
        <p className="slide-body mt-[16px]" style={{ color: "hsl(220 10% 70%)", fontSize: 30 }}>
          Transtornos mentais relacionados ao trabalho podem ser enquadrados como <span className="text-gold-gradient font-bold">acidente de trabalho</span>
        </p>
      </div>
      <div className="flex gap-[40px] justify-center">
        {[
          { icon: "💰", label: "Financeiro", desc: "Custos com afastamentos, processos e substituições" },
          { icon: "📉", label: "Produtividade", desc: "Queda de performance e engajamento das equipes" },
          { icon: "⚖️", label: "Jurídico", desc: "Riscos trabalhistas e responsabilidade civil" },
          { icon: "🧠", label: "Humano", desc: "Sofrimento, adoecimento e perda de talentos" },
        ].map((item, i) => (
          <div key={i} className={`w-[300px] p-[32px] rounded-[20px] animate-fade-in-up delay-${(i + 2) * 100}`}
            style={{ background: "hsl(220 20% 14% / 0.85)", border: "1px solid hsl(220 15% 22%)", backdropFilter: "blur(8px)" }}>
            <div className="text-[52px] mb-[16px]">{item.icon}</div>
            <div className="slide-body-lg font-bold text-gold-gradient mb-[8px]">{item.label}</div>
            <div className="slide-body" style={{ color: "hsl(220 10% 55%)", fontSize: 22 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideImpact;
