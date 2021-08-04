import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-gray-600 bg-Medium__Champagne body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="Home"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src="https://cdn.discordapp.com/attachments/868286118540484649/872192894629466202/g569.png"
            alt=""
            width="25"
          />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/Home" className="mr-5 hover:text-gray-900">
            Inicio
          </Link>
          <Link to="/posts/1" className="mr-5 hover:text-gray-900">
            Detail Beta
          </Link>
          <Link to="/Home" className="mr-5 hover:text-gray-900">
            Third Link
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>
        <Link to="/login">
          <span class="px-4 py-2 m-4 text-base rounded-full text-Viridian__Green  border border-Viridian__Green hover:bg-Viridian__Green hover:text-Rich__Black ">
            Login
          </span>
        </Link>
        <Link to="/register">
          <span class="px-4 py-2 bg-Viridian__Green text-base rounded-full text-white  bg-indigo-500 ">
            Register
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
