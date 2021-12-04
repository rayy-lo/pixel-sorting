import React from "react";
import "../styles/modules/Button.module.css";

interface ButtonProp {
  children: React.ReactNode;
  // onClick: React.MouseEventHandler;
}

export const Button = ({ children }: ButtonProp) => {
  return <button>{children}</button>;
};
