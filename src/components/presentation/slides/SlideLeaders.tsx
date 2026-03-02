import SlideLayout from "../SlideLayout";

const SlideLeaders = () => (
  <SlideLayout backgroundImage="/images/team-healthy.jpg" overlay="dark">
    <div className="flex flex-col items-center justify-center h-full px-[200px] text-center">
      <h2 className="slide-title animate-fade-in-up" style={{ color: "hsl(40 20% 95%)", lineHeight: 1.3 }}>
        Qual o valor de{" "}
        <span className="text-gold-gradient">líderes</span>{" "}
        <span className="text-gold-gradient">inspiradores</span>,
        <br />capacitados e comprometidos?
      </h2>
      <div className="w-[120px] h-[4px] my-[50px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />
      <h2 className="slide-title animate-fade-in-up delay-300" style={{ color: "hsl(40 20% 95%)", lineHeight: 1.3 }}>
        Qual o resultado de equipes{" "}
        <span className="text-gold-gradient">saudáveis</span>,
        <br />preparadas e <span className="text-gold-gradient">produtivas</span>?
      </h2>
    </div>
  </SlideLayout>
);

export default SlideLeaders;
