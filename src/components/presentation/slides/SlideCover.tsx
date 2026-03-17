import SlideLayout from "../SlideLayout";

const SlideCover = () => (
  <SlideLayout backgroundImage="/images/executive-woman-bg.jpg" overlay="dark">
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-end px-[120px] pb-[100px]">
        <div className="animate-fade-in-up">
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 120,
            lineHeight: 1.05,
            fontWeight: 800,
            color: "hsl(40 20% 95%)",
          }}>
            MENTAL +
          </h1>
          <div className="w-[140px] h-[5px] my-[44px]" style={{ background: "hsl(40 70% 55%)" }} />
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: "0.03em",
            lineHeight: 1.3,
            background: "linear-gradient(135deg, hsl(40 70% 55%), hsl(40 90% 70%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Líderes que resolvem<br />Equipes que entregam
          </p>
          <p style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 38,
            lineHeight: 1.6,
            fontWeight: 400,
            color: "hsl(220 10% 55%)",
            maxWidth: 800,
            marginTop: 36,
          }}>
            Soluções em psicologia para cuidar de pessoas<br />e multiplicar resultados
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideCover;
