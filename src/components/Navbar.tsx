import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Navbar: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <Link to="/" className="flex flex-1 items-center gap-1">
        <img src={Logo} alt="company-logo" width="56px" height="100%" />
        <span className="text-xl font-semibold leading-tight text-mainColor">
          Car
          <br />
          Rental
        </span>
      </Link>

      <nav className="flex flex-1 items-center justify-center gap-8">
        <Link to="/" className="font-semibold text-mainColor hover:underline">
          Home
        </Link>
        <Link
          to="/about"
          className="font-semibold text-mainColor hover:underline"
        >
          About
        </Link>
        <Link
          to="/cars"
          className="font-semibold text-mainColor hover:underline"
        >
          Cars
        </Link>
        <Link
          to="/teams"
          className="font-semibold text-mainColor hover:underline"
        >
          Teams
        </Link>
      </nav>

      <div className="flex flex-1 items-center justify-end gap-8">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </header>
  );
};

export default Navbar;
