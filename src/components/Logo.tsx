import React from "react";
import LogoCompany from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex flex-1 items-center gap-1">
      <img src={LogoCompany} alt="company-logo" width="56px" height="100%" />
      <span className="hidden select-none text-xl font-semibold leading-tight text-mainColor md:block">
        Car
        <br />
        Rental
      </span>
    </Link>
  );
};

export default Logo;
