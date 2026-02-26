import SlideLayout from "../SlideLayout";

const SlideValue = () => (
  <SlideLayout>
    <div className="flex items-center justify-center h-full" style={{ background: "linear-gradient(135deg, hsl(220 50% 8%), hsl(220 35% 14%))" }}>
      <div className="text-center animate-scale-in px-[120px]">
        <h2 className="slide-title" style={{ color: "hsl(40 20% 95%)" }}>
          Qual o valor de líderes<br /><span className="text-gold-gradient">capacitados e engajados?</span>
        </h2>
        <div className="w-[120px] h-[3px] mx-auto my-[50px]" style={{ background: "hsl(40 70% 55%)" }} />
        <h2 className="slide-title" style={{ color: "hsl(40 20% 95%)" }}>
          E equipes <span className="text-gold-gradient">preparadas<br />e produtivas?</span>
        </h2>
      </div>
    </div>
  </SlideLayout>
);

export default SlideValue;
