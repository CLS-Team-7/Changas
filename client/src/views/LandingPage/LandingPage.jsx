import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function LandingPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-around items-center bg-gradient-to-b from-Medium__Champagne h-screen ">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl font-bold">CHANGAS</h1>
          <span className="text-2xl  "> "Generando Oportunidades" </span>
          <Link to='/home' className='m-3'>
            <span class=" px-4 py-2 w-45   rounded-full text-white  bg-Viridian__Green font-bold hover:bg-Blue__Shappire ">
              Ir a la Home
            </span>
          </Link>
        </div>
        <img
          className="rounded-full"
          src="https://ganemospalencia.com/wp-content/uploads/2020/03/trabajadores-profesionales-dibujos-animados-dia-trabajo_18591-56729.jpg"
          width="450"
          alt="Imagen"
        />
      </div>

    </div>
  );
}

export default LandingPage;
