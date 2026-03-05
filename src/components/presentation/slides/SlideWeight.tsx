import SlideLayout from "../SlideLayout";

const SlideWeight = () => (
  <SlideLayout backgroundImage="/images/accident-bg.jpg" overlay="dark">
    <div className="flex flex-col items-center h-full px-[80px]">
      <div className="text-center animate-scale-in pt-[80px] mb-[40px]">
        <h2 className="slide-title text-gold-gradient leading-tight">
          O peso de um adoecimento,<br />assédio ou afastamento
        </h2>
      </div>
      <div className="flex-1 flex items-center">
        <div className="flex gap-[36px] justify-center">
          {[
            { icon: "💰", label: "Financeiro", desc: "Custos com absenteísmo, afastamentos, turnover, multas por fiscalizações" },
            { icon: "📉", label: "Produtividade", desc: "Queda no engajamento, performance e resultados dos líderes e dos times" },
            { icon: "⚖️", label: "Jurídico", desc: "Riscos trabalhistas, responsabilidade civil, processos e indenizações" },
            { icon: "💼", label: "Negócio", desc: "Perda de clientes, danos à reputação, não retenção de talentos" },
          ].map((item, i) => (
            <div key={i} className={`w-[380px] p-[44px] rounded-[20px] animate-fade-in-up delay-${(i + 2) * 100}`}
              style={{ background: "hsl(220 20% 14% / 0.85)", border: "1px solid hsl(220 15% 22%)", backdropFilter: "blur(8px)" }}>
              <div className="text-[60px] mb-[20px]">{item.icon}</div>
              <div className="slide-body-lg font-bold text-gold-gradient mb-[12px]" style={{ fontSize: 36 }}>{item.label}</div>
              <div className="slide-body" style={{ color: "hsl(220 10% 55%)", fontSize: 26 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideWeight;
