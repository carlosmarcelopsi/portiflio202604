import SlideLayout from "../SlideLayout";

const SlideCover = () => (
  <SlideLayout backgroundImage="/images/foto-apresentacao-01.png" overlay="dark">
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center px-[120px]">
        <div className="animate-fade-in-up">
          <div className="slide-label text-gold-gradient mb-[20px]">Psicólogo</div>
          <h1 className="slide-title-lg" style={{ color: "hsl(40 20% 95%)" }}>
            CARLOS<br />MARCELO
          </h1>
          <div className="w-[120px] h-[4px] my-[40px]" style={{ background: "hsl(40 70% 55%)" }} />
          <p className="text-gold-gradient" style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 44,
            fontWeight: 600,
            letterSpacing: "0.05em",
            lineHeight: 1.4,
          }}>
            Líderes que resolvem – Times que entregam
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
