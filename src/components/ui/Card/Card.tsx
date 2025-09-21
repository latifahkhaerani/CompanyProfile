import React, { type CSSProperties } from "react";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Card = ({ title, description, icon, className, style }: CardProps) => {
  return (
    <div
      className={`relative mx-auto bg-[#FAFAFA] dark:bg-[#0A0D12] 
        text-[#0A0D12] dark:text-[#FDFDFD] 
        w-full h-auto p-5 gap-5 pt-12
        rounded-2xl border border-[#DEDCDC] dark:border-[#181D27]
        ${className || ""}`}
      style={style}
    >
      {icon && (
        <div className="absolute w-16 md:w-20 -top-6 left-4">{icon}</div>
      )}
      <div>
        <h2 className="text-base md:text-xl font-bold leading-8 ">{title}</h2>
        <p className="gap-1 text-sm md:text-base font-medium leading-7 text-[#717680]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
