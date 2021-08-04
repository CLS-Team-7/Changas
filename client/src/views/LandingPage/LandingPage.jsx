import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function LandingPage() {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl">CHANGAS</h1>
          <span className="text-2xl "> "Generando Oportunidades" </span>
          <span class="m-2 px-4 py-2 w-50   rounded-full text-white  bg-Viridian__Green font-bold ">
            Ir a la Home
          </span>
        </div>
        <img
          className="rounded-full"
          src="https://ganemospalencia.com/wp-content/uploads/2020/03/trabajadores-profesionales-dibujos-animados-dia-trabajo_18591-56729.jpg"
          width="450"
          alt="Imagen"
        />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
