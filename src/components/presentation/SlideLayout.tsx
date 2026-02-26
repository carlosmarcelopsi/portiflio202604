import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  backgroundImage?: string;
  overlay?: "dark" | "gradient-left" | "gradient-bottom" | "none";
  className?: string;
}

const SlideLayout = ({ children, backgroundImage, overlay = "none", className = "" }: SlideLayoutProps) => {
  return (
    <div className={`slide-content relative ${className}`} style={{ background: "hsl(220 40% 8%)" }}>
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${
          overlay === "dark" ? "overlay-dark" : 
          overlay === "gradient-left" ? "overlay-gradient-left" : 
          "overlay-gradient-bottom"
        }`} />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
