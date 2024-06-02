import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [showNavbarMobile, setShowNavbarMobile] = useState<boolean>(false);

  const handleNavbarMobile = () => {
    setShowNavbarMobile(!showNavbarMobile);
  };

  return (
    <header className="flex w-full items-center justify-between p-4">
      <Logo />

      <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
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

      <div className="mr-4 flex flex-1 items-center justify-end gap-4 md:mr-0 md:gap-8">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="block cursor-pointer md:hidden">
          <Menu
            size={30}
            color="#f47920"
            className={showNavbarMobile ? "hidden" : "block"}
            onClick={handleNavbarMobile}
          />
          <X
            size={30}
            color="#f47920"
            className={showNavbarMobile ? "block" : "hidden"}
            onClick={handleNavbarMobile}
          />
        </div>
      </div>

      {/* NAVBAR MOBILE START */}
      <section
        className={`border-orange fixed ${showNavbarMobile ? "left-0" : "left-[-200%]"} top-0 z-50 h-[100vh] w-[60%] border-r bg-white p-4 shadow-md transition-all duration-300`}
      >
        <Logo />

        <nav className="absolute top-[40%] w-full translate-y-[-40%] p-4">
          <div className="flex flex-col gap-8">
            <Link
              to="/"
              className="font-semibold text-mainColor hover:underline"
            >
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
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
