import SlideLayout from "../SlideLayout";

const SlideContact = () => (
  <SlideLayout backgroundImage="/images/hero-bg.jpg" overlay="dark">
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center px-[120px]">
        <div className="slide-label text-gold-gradient mb-[20px] animate-fade-in-up">Vamos conversar?</div>
        <h2 className="slide-title-lg animate-fade-in-up delay-100" style={{ color: "hsl(40 20% 95%)" }}>
          AGENDE UMA<br /><span className="text-gold-gradient">REUNIÃO</span>
        </h2>
        <div className="w-[120px] h-[4px] my-[40px] animate-fade-in-up delay-200" style={{ background: "hsl(40 70% 55%)" }} />
        <p className="slide-subtitle animate-fade-in-up delay-300 mb-[50px]" style={{ color: "hsl(40 20% 90%)" }}>
          Inspire · Capacite · Multiplique Resultados
        </p>
        <div className="space-y-[24px]">
          {[
            { icon: "📱", text: "(27) 98139-4372" },
            { icon: "📧", text: "carlosmarcelo.as" },
            { icon: "📷", text: "@carlosmarcelo-as" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-[20px] animate-fade-in-up delay-${(i + 4) * 100}`}>
              <span className="text-[36px]">{item.icon}</span>
              <span className="slide-body-lg" style={{ color: "hsl(40 20% 90%)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[500px] flex items-end justify-center animate-fade-in delay-400">
        <img src="/images/profile-formal.jpg" alt="Carlos Marcelo" className="h-[900px] object-cover object-top rounded-t-[20px]" />
      </div>
    </div>
  </SlideLayout>
);

export default SlideContact;
