import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-gray-600 bg-Medium__Champagne body-font ">
      <div className="container text-sm mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center  mb-4 md:mb-0"
        >
          <img
            src="https://media.discordapp.net/attachments/868284643886120985/872487883771092992/2.png?width=797&height=171"
            alt="Logo"
            width="120"
          />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-Rich__Black justify-center">
          <Link to="/home" className="mr-5 hover:text-gray-900 font-bold">
            Inicio
          </Link>
          <Link to="/posts/1" className="mr-5 hover:text-gray-900 font-bold">
            Detail Beta
          </Link>
          <Link to="/admin" className="mr-5 hover:text-gray-900 font-bold">
            Panel Admin
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900 font-bold">
            About
          </Link>
        </nav>
        <Link to="/login">
          <span class=" bg-Gamboge text-white font-bold py-2 px-2 rounded border border-Mahogany hover:bg-Gamboge hover:border-Gamboge hover:text-white ">
            Login/Register
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
