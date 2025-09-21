import React, { type CSSProperties } from "react";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  caret?: React.ReactNode;
  style?: CSSProperties;
};

const Card = ({
  title,
  description,
  icon,
  className,
  caret,
  style,
}: CardProps) => {
  return (
    <div
      className={`relative mx-auto bg-[#FAFAFA] dark:bg-[#0A0D12] 
        text-[#0A0D12] dark:text-[#FDFDFD] 
        w-full h-auto p-4 gap-5 
        rounded-2xl border border-[#DEDCDC] dark:border-[#181D27]
        ${className || ""}`}
      style={style}
    >
      {icon && (
        <div className="absolute w-16 md:w-20 -top-6 left-4">{icon}</div>
      )}
      <div className="flex flex-row items-start justify-between">
        <div>
          <h2 className="text-base md:text-xl font-bold leading-10 ">
            {title}
          </h2>
          <p className="text-sm md:text-base font-medium leading-7 text-[#717680]">
            {description}
          </p>
        </div>
        {caret && (
          <>
            <div className="dark:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 15L12 9L6 15"
                  stroke="#0A0D12"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="hidden dark:block">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 15L12 9L6 15"
                  stroke="#FDFDFD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
