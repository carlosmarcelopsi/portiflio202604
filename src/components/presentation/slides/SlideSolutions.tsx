import SlideLayout from "../SlideLayout";

const SlideSolutions = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full px-[120px]" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      <h2 className="slide-title text-center animate-fade-in-up" style={{ color: "hsl(40 20% 95%)" }}>
        Você precisa de <span className="text-gold-gradient">M.A.I.S.</span> soluções!
      </h2>
      <div className="w-[80px] h-[3px] my-[50px] animate-fade-in-up delay-100" style={{ background: "hsl(40 70% 55%)" }} />
      <div className="grid grid-cols-3 gap-[30px] w-full max-w-[1600px]">
        {[
          { icon: "📋", title: "Riscos Psicossociais — NR 1", desc: "Identificação e gerenciamento conforme a norma regulamentadora" },
          { icon: "🎯", title: "Coaching Executivo", desc: "Desenvolvimento de competências comportamentais para líderes" },
          { icon: "🛡️", title: "Consultoria em Saúde Mental", desc: "Saúde mental e segurança do trabalho integradas" },
          { icon: "🚀", title: "Desenvolvimento de Competências", desc: "Capacitação estratégica de equipes para alta performance e colaboração" },
          { icon: "📊", title: "Avaliações Psicológicas", desc: "Assessments comportamentais e psicodiagnósticos" },
          { icon: "🚨", title: "Atendimento em Emergências", desc: "Suporte psicológico em crises, emergências e desastres" },
        ].map((item, i) => (
          <div key={i} className={`p-[40px] rounded-[16px] animate-fade-in-up delay-${(i + 2) * 100}`}
            style={{ background: "hsl(220 20% 14%)", border: "1px solid hsl(220 15% 22%)" }}>
            <div className="text-[48px] mb-[20px]">{item.icon}</div>
            <div className="text-gold-gradient font-bold mb-[12px]" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 28 }}>{item.title}</div>
            <div style={{ color: "hsl(220 10% 55%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 24 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideSolutions;
