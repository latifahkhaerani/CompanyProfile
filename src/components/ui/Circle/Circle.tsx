// import React from "react";

type CircleProps = {
  title: string;
  description: string;
  className?: string;
};

const Circle = ({ title, description, className }: CircleProps) => {
  return (
    <div
      className={`w-[172.5px] h-[172.5px] text-4xl md:w-65 md:h-65 border-1 p-4 border-[#DEDCDC] bg-[#FAFAFA] dark:bg-[#0A0D12] rounded-full grid justify-center text-center content-center mx-auto ${
        className || ""
      }`}
    >
      <span
        className={`text-[#FF623E] md:text-5xl leading-11 md:mb-5 font-bold ${className}`}
      >
        {title}
      </span>
      <span
        className={`text-sm md:text-lg leading-7 font-semibold ${className}`}
      >
        {description}
      </span>
    </div>
  );
};

export default Circle;
