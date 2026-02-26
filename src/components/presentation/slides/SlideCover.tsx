import SlideLayout from "../SlideLayout";

const SlideCover = () => (
  <SlideLayout backgroundImage="/images/hero-bg.jpg" overlay="dark">
    <div className="flex h-full">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center px-[120px]">
        <div className="animate-fade-in-up">
          <div className="slide-label text-gold-gradient mb-[20px]">Psicólogo · CRP 16/6051</div>
          <h1 className="slide-title-lg" style={{ color: "hsl(40 20% 95%)" }}>
            CARLOS<br />MARCELO
          </h1>
          <div className="w-[120px] h-[4px] my-[40px]" style={{ background: "hsl(40 70% 55%)" }} />
          <p className="slide-subtitle" style={{ color: "hsl(40 20% 90%)" }}>
            Liderança · Saúde Mental · Comportamento
          </p>
          <p className="slide-body mt-[30px]" style={{ color: "hsl(220 10% 55%)", maxWidth: 700 }}>
            Soluções em psicologia para cuidar de pessoas<br />e multiplicar resultados
          </p>
        </div>
      </div>
      {/* Right photo */}
      <div className="w-[500px] flex items-end justify-center animate-fade-in delay-300">
        <img
          src="/images/profile-blazer.jpg"
          alt="Carlos Marcelo"
          className="h-[900px] object-cover object-top rounded-t-[20px]"
          style={{ filter: "brightness(0.95)" }}
        />
      </div>
    </div>
  </SlideLayout>
);

export default SlideCover;
