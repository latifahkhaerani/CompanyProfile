import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: React.FC<InputProps> = ({ label, className = "", ...props }) => {
  return (
    <div className="mb-5">
      <label className="text-sm font-bold leading-8">{label}</label>
      <input
        className={`w-full h-11 rounded-xl p-4 mt-1 border border-[#DFDFDF] dark:border-[#252B37] ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
