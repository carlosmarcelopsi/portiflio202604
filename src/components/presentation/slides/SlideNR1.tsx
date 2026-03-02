import SlideLayout from "../SlideLayout";

const risks = [
  { risk: "Assédio de qualquer natureza no trabalho", consequence: "Transtorno mental" },
  { risk: "Má gestão de mudanças organizacionais", consequence: "Transtorno mental; DORT" },
  { risk: "Baixa clareza de papel/função", consequence: "Transtorno mental" },
  { risk: "Baixas recompensas e reconhecimento", consequence: "Transtorno mental" },
  { risk: "Falta de suporte/apoio no trabalho", consequence: "Transtorno mental" },
  { risk: "Baixo controle no trabalho / Falta de autonomia", consequence: "Transtorno mental; DORT" },
  { risk: "Baixa justiça organizacional", consequence: "Transtorno mental" },
  { risk: "Eventos violentos ou traumáticos", consequence: "Transtorno mental" },
  { risk: "Baixa demanda no trabalho (subcarga)", consequence: "Transtorno mental" },
  { risk: "Excesso de demandas no trabalho (sobrecarga)", consequence: "Transtorno mental; DORT" },
  { risk: "Maus relacionamentos no local de trabalho", consequence: "Transtorno mental" },
  { risk: "Trabalho em condições de difícil comunicação", consequence: "Transtorno mental" },
  { risk: "Trabalho remoto e isolado", consequence: "Transtorno mental; Fadiga" },
];

const SlideNR1 = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[100px] py-[60px]" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      {/* Header */}
      <div className="text-center mb-[20px]">
        <h2 className="slide-title animate-fade-in-up" style={{ color: "hsl(40 20% 95%)" }}>
          A Nova NR-1 e seus <span className="text-gold-gradient">desafios</span>
        </h2>
        <p className="animate-fade-in-up delay-100 mt-[12px]" style={{
          color: "hsl(220 10% 60%)",
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: 22,
          fontStyle: "italic",
          maxWidth: 1200,
          margin: "12px auto 0",
        }}>
          Listagem exemplificativa de fatores de risco psicossociais a serem identificados, avaliados, gerenciados e mitigados
        </p>
      </div>
      <div className="w-[80px] h-[3px] mx-auto mb-[24px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />

      {/* Table */}
      <div className="flex-1 overflow-hidden animate-fade-in-up delay-300">
        <div className="rounded-[16px] overflow-hidden" style={{ border: "1px solid hsl(220 15% 22%)" }}>
          {/* Table header */}
          <div className="flex" style={{ background: "hsl(40 70% 55% / 0.15)" }}>
            <div className="flex-[3] px-[32px] py-[16px]" style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "hsl(40 70% 55%)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}>
              Perigo (fator de risco)
            </div>
            <div className="flex-[2] px-[32px] py-[16px]" style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "hsl(40 70% 55%)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}>
              Possível consequência (lesão ou agravo)
            </div>
          </div>
          {/* Table rows */}
          {risks.map((item, i) => (
            <div key={i} className="flex" style={{
              background: i % 2 === 0 ? "hsl(220 20% 14% / 0.6)" : "hsl(220 20% 12% / 0.6)",
              borderTop: "1px solid hsl(220 15% 22% / 0.5)",
            }}>
              <div className="flex-[3] px-[32px] py-[12px]" style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 21,
                color: "hsl(40 20% 90%)",
              }}>
                {item.risk}
              </div>
              <div className="flex-[2] px-[32px] py-[12px]" style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 21,
                color: "hsl(220 10% 60%)",
              }}>
                {item.consequence}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-[16px] animate-fade-in-up delay-400" style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 18,
        color: "hsl(220 10% 45%)",
        fontStyle: "italic",
      }}>
        (Fonte: Guia TEM NR-1/2025)
      </div>
    </div>
  </SlideLayout>
);

export default SlideNR1;
