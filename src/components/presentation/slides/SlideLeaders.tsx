import SlideLayout from "../SlideLayout";

const SlideLeaders = () => (
  <SlideLayout backgroundImage="/images/team-healthy.jpg" overlay="dark">
    <div className="flex flex-col items-center justify-center h-full px-[200px] text-center">
      <h2 className="slide-title animate-fade-in-up" style={{ color: "hsl(40 20% 95%)", lineHeight: 1.3 }}>
        <span className="text-gold-gradient">LÍDERES QUE RESOLVEM</span>{" "}
        são aqueles que{" "}
        <span className="text-gold-gradient">inspiram</span>,{" "}
        capacitam e alavancam a{" "}
        <span className="text-gold-gradient">produtividade</span>
      </h2>
      <div className="w-[120px] h-[4px] my-[50px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />
      <h2 className="slide-title animate-fade-in-up delay-300" style={{ color: "hsl(40 20% 95%)", lineHeight: 1.3 }}>
        <span className="text-gold-gradient">TIMES QUE ENTREGAM</span>{" "}
        resultados são{" "}
        <span className="text-gold-gradient">saudáveis</span>,{" "}
        engajados e preparados
      </h2>
    </div>
  </SlideLayout>
);

export default SlideLeaders;
