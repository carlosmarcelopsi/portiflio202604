import SlideLayout from "../SlideLayout";

const SlideImpact = () => (
  <SlideLayout>
    <div className="flex items-center justify-center h-full" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      <div className="text-center animate-scale-in">
        <h2 className="slide-title mb-[60px]" style={{ color: "hsl(40 20% 95%)" }}>
          Qual é o <span className="text-gold-gradient">IMPACTO</span>…
        </h2>
        <div className="flex gap-[60px] justify-center">
          {[
            { icon: "💰", label: "Financeiro", desc: "Custos com afastamentos, processos e substituições" },
            { icon: "📉", label: "Produtividade", desc: "Queda de performance e engajamento das equipes" },
            { icon: "⚖️", label: "Jurídico", desc: "Riscos trabalhistas e responsabilidade civil" },
            { icon: "🧠", label: "Humano", desc: "Sofrimento, adoecimento e perda de talentos" },
          ].map((item, i) => (
            <div key={i} className={`w-[320px] p-[40px] rounded-[20px] animate-fade-in-up delay-${(i + 2) * 100}`}
              style={{ background: "hsl(220 20% 14%)", border: "1px solid hsl(220 15% 22%)" }}>
              <div className="text-[64px] mb-[20px]">{item.icon}</div>
              <div className="slide-body-lg font-bold text-gold-gradient mb-[12px]">{item.label}</div>
              <div className="slide-body" style={{ color: "hsl(220 10% 55%)", fontSize: 26 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideImpact;
