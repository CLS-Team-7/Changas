import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-gray-600 bg-Medium__Champagne body-font ">
      <div className="container text-sm mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          to="/home"
          className="flex title-font font-medium items-center  mb-4 md:mb-0"
        >
          <img
            src="https://media.discordapp.net/attachments/868284643886120985/872487887319474236/1.png?width=797&height=171"
            alt="Logo"
            width="120"
          />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-Rich__Black justify-center">
          <Link to="/admin" className="mr-5 hover:text-gray-900 font-bold">
            Panel Admin
          </Link>
          <Link to="/faq" className="mr-5 hover:text-gray-900 font-bold">
            FAQ
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900 font-bold">
            Sobre Nosotros
          </Link>
        </nav>
        <Link to="/login">
          <span class=" bg-Gamboge text-white font-bold py-2 px-2 rounded border hover:border-Mahogany  hover:text-white ">
            Entrar / Registrar
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
