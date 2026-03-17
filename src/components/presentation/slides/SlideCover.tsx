import SlideLayout from "../SlideLayout";

const SlideCover = () => (
  <SlideLayout backgroundImage="/images/executive-woman-bg.jpg" overlay="dark">
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-end px-[120px] pb-[120px]">
        <div className="animate-fade-in-up">
          <h1 className="slide-title-lg" style={{ color: "hsl(40 20% 95%)" }}>
            MENTAL +
          </h1>
          <div className="w-[120px] h-[4px] my-[40px]" style={{ background: "hsl(40 70% 55%)" }} />
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: "0.03em",
            lineHeight: 1.3,
            background: "linear-gradient(135deg, hsl(40 70% 55%), hsl(40 90% 70%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Líderes que resolvem –<br />Equipes que entregam
          </p>
          <p className="slide-body mt-[30px]" style={{ color: "hsl(220 10% 55%)", maxWidth: 700 }}>
            Soluções em psicologia para cuidar de pessoas<br />e multiplicar resultados
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideCover;
