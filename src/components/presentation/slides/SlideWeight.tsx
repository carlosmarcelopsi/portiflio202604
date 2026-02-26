import SlideLayout from "../SlideLayout";

const SlideWeight = () => (
  <SlideLayout backgroundImage="/images/weight-bg.jpg" overlay="dark">
    <div className="flex items-center justify-center h-full">
      <div className="text-center px-[120px] animate-scale-in">
        <h2 className="slide-title-lg text-gold-gradient leading-tight">
          Qual o PESO de um<br />adoecimento, assédio<br />ou afastamento?
        </h2>
      </div>
    </div>
  </SlideLayout>
);

export default SlideWeight;
