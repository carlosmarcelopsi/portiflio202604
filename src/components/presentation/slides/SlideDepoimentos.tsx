import SlideLayout from "../SlideLayout";

const SlideDepoimentos = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full px-[120px]" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      <div className="slide-label text-gold-gradient mb-[24px] animate-fade-in-up">O que dizem</div>
      <h2 className="slide-title text-center animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
        <span className="text-gold-gradient">Depoimentos</span>
      </h2>
      <div className="w-[80px] h-[3px] my-[50px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />
      <div className="grid grid-cols-3 gap-[40px] w-full max-w-[1600px]">
        {[
          { quote: "O trabalho do Carlos transformou a forma como nossa liderança enxerga a saúde mental no ambiente corporativo.", author: "Diretor de RH", company: "Indústria" },
          { quote: "As palestras trouxeram uma consciência que não tínhamos. Os resultados em engajamento foram imediatos.", author: "Gerente de Pessoas", company: "Logística" },
          { quote: "Profissional excepcional. A metodologia M.A.I.S. nos deu clareza para agir de forma estratégica.", author: "CEO", company: "Engenharia" },
        ].map((item, i) => (
          <div key={i} className={`p-[48px] rounded-[20px] animate-fade-in-up delay-${(i + 3) * 100}`}
            style={{ background: "hsl(220 20% 14%)", border: "1px solid hsl(40 70% 55% / 0.2)" }}>
            <div className="text-[48px] mb-[24px] text-gold-gradient">"</div>
            <p className="mb-[32px]" style={{ color: "hsl(220 10% 70%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 24, fontStyle: "italic", lineHeight: 1.6 }}>
              {item.quote}
            </p>
            <div className="text-gold-gradient font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: 22 }}>{item.author}</div>
            <div style={{ color: "hsl(220 10% 50%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 20 }}>{item.company}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideDepoimentos;
