/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, icon }) => {
  return (
    <button
      className={`flex items-center justify-center gap-4 border border-mainColor bg-mainColor px-6 py-2 font-semibold text-white transition hover:bg-white hover:text-mainColor`}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
