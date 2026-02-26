import SlideLayout from "../SlideLayout";

const SlidePrepared = () => (
  <SlideLayout backgroundImage="/images/team-success.jpg" overlay="gradient-left">
    <div className="flex h-full">
      <div className="w-[55%] flex flex-col justify-center px-[120px]">
        <h2 className="slide-title animate-fade-in-up" style={{ color: "hsl(40 20% 95%)" }}>
          Sua empresa está<br />preparada para<br /><span className="text-gold-gradient">esses desafios?</span>
        </h2>
        <div className="w-[80px] h-[3px] my-[40px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />
        <div className="space-y-[30px]">
          {[
            "Tem líderes que inspiram e capacitam?",
            "Times engajados e produtivos?",
            "Estratégias de prevenção e cuidado?",
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-[20px] animate-fade-in-up delay-${(i + 3) * 100}`}>
              <div className="w-[12px] h-[12px] rounded-full flex-shrink-0" style={{ background: "hsl(40 70% 55%)" }} />
              <span className="slide-body-lg" style={{ color: "hsl(40 20% 90%)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlidePrepared;
