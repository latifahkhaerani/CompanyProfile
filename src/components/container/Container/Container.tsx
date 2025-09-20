import type { CSSProperties, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

const Container = ({ children, className = "", style }: ContainerProps) => {
  return (
    <div
      className={`max-w-7xl md:w-[720px] mx-auto pr-4 pl-4 md:pr-0 md:pl-0 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
