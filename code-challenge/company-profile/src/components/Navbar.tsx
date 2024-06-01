import React from "react";
import Logo from "/logo.png";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Navbar: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <Link to="/" className="flex flex-1 items-center gap-1">
        <img src={Logo} alt="company-logo" className="h-14 w-14" />
        <span className="text-mainColor text-xl font-semibold leading-tight">
          Car
          <br />
          Rental
        </span>
      </Link>

      <nav className="flex flex-1 items-center justify-center gap-8">
        <Link to="/" className="text-mainColor font-semibold hover:underline">
          Home
        </Link>
        <Link
          to="/about"
          className="text-mainColor font-semibold hover:underline"
        >
          About
        </Link>
        <Link
          to="/cars"
          className="text-mainColor font-semibold hover:underline"
        >
          Cars
        </Link>
        <Link
          to="/teams"
          className="text-mainColor font-semibold hover:underline"
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
