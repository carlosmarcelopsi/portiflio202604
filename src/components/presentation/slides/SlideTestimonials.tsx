import SlideLayout from "../SlideLayout";

const testimonials = [
  {
    quote: "Considero o trabalho do Carlos Marcelo fundamental para esse momento que vemos de tanto desequilíbrio com a saúde geral dos empregados de todas as empresas, sejam eles o nível chão de fábrica, quantos seus dirigentes ou diretores. Recomendo sem sombra de dúvidas.",
    authors: ["Marcos Ramos — Gerente da área de serviços ambientais"],
    company: "VALE Tubarão – ES",
  },
  {
    quote: "A contribuição do Carlos Marcelo na ICTUS foi de enorme valor. Atuou como coach e consultor corporativo, apoiando a direção e liderança. Com postura colaborativa e grande capacidade de engajar equipes, trouxe impactos positivos diretos no clima organizacional e alinhamento de objetivos. Recomendo-o a qualquer organização que busque um profissional competente e comprometido com resultados concretos.",
    authors: ["Êmerson Martins de Assis"],
    company: "Diretor – ICTUS Engenharia",
  },
  {
    quote: "Carlos Marcelo superou todas as expectativas no Grupo Espiral. Com domínio técnico e uma didática perfeitamente adaptada ao nosso público, ele trouxe leveza e clareza ao temas que abordou... Um profissional extremamente competente, assertivo e altamente recomendável.",
    authors: ["Dieniessen G Derito — Gerente de SGI", "Tiago Barbosa — Gerente de Saúde e Segurança"],
    company: "Grupo Espiral Engenharia",
  },
];

const SlideTestimonials = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[80px] py-[60px]" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      <div className="text-center mb-[40px]">
        <div className="slide-label text-gold-gradient mb-[16px] animate-fade-in-up">O que dizem</div>
        <h2 className="slide-title animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
          <span className="text-gold-gradient">Depoimentos</span>
        </h2>
      </div>
      <div className="flex-1 flex gap-[28px] items-stretch">
        {testimonials.map((item, i) => (
          <div key={i} className={`flex-1 p-[36px] rounded-[20px] flex flex-col justify-between animate-fade-in-up delay-${(i + 2) * 100}`}
            style={{ background: "hsl(220 20% 14% / 0.7)", border: "1px solid hsl(220 15% 22%)" }}>
            <div>
              <div className="text-gold-gradient mb-[16px]" style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, lineHeight: 1 }}>"</div>
              <p style={{ color: "hsl(40 20% 90%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 30, lineHeight: 1.4 }}>
                {item.quote}
              </p>
            </div>
            <div className="mt-[24px] pt-[16px]" style={{ borderTop: "1px solid hsl(40 70% 55% / 0.2)" }}>
              {item.authors.map((author, j) => (
                <p key={j} style={{ color: "hsl(40 70% 55%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 24, fontWeight: 600 }}>
                  {author}
                </p>
              ))}
              <p style={{ color: "hsl(40 70% 55%)", fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, marginTop: 8, letterSpacing: "0.03em" }}>
                {item.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideTestimonials;
