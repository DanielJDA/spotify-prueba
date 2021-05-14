import React from "react";

interface Props {
  children?: React.ReactNode;
  className: string;
}

const Button: React.FC<Props> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
