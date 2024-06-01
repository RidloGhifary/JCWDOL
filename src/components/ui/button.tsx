/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface Props {
  children: React.ReactNode;
  icon?: string;
}

const Button: React.FC<Props> = ({ children, icon }) => {
  return (
    <button
      className={`bg-mainColor border-mainColor hover:text-mainColor border px-6 py-2 font-semibold text-white transition hover:bg-white`}
    >
      {children}
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};

export default Button;
