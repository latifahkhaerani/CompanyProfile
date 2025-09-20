import React from "react";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ href, children, className, onClick }: ButtonProps) => {
  const baseStyle =
    "[background-color:#FF623E] shadow-[inset_4px_4px_6px_rgba(255,255,255,0.6)] text-white font-bold text-sm leading-3.5 py-3.5 px-8 rounded-full text-center hover:shadow-none ";

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${className}`} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${baseStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
