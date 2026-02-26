import SlideLayout from "../SlideLayout";

const SlideAccident = () => (
  <SlideLayout backgroundImage="/images/accident-bg.jpg" overlay="dark">
    <div className="flex items-center justify-center h-full">
      <div className="text-center animate-scale-in">
        <div className="slide-label text-gold-gradient mb-[30px]">Você sabia?</div>
        <h2 className="slide-title-lg" style={{ color: "hsl(40 20% 95%)" }}>
          ACIDENTE DE<br /><span className="text-gold-gradient">TRABALHO?</span>
        </h2>
        <p className="slide-body mt-[40px] mx-auto" style={{ color: "hsl(220 10% 60%)", maxWidth: 800, fontSize: 36 }}>
          Transtornos mentais relacionados ao trabalho podem<br />ser enquadrados como acidente de trabalho
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideAccident;
