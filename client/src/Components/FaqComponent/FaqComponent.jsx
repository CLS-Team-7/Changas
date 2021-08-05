import React from 'react'

function FaqComponen() {
  return (
    <div className="bg-gradient-to-b from-Medium__Champagne h-screen">
      <div class="p-10">
        <h3 class=" mb-4 text-xl font-bold">FAQ</h3>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            ¿Qué es changas / Quienes somos?
          </h2>
          <p class="text-gray-700">
            Somos una empresa tecnológica que se encarga de conectar personas
            con diferentes rubros, dividiendo en dos secciones principales,
            tanto para quienes ofrecen servicios de plomeria, gasista, etc, como
            también personas que requieran contratar dichos servicios.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            ¿Cual es nuestro objetivo / Nuestros sueños son?
          </h2>
          <p class="text-gray-700">
            Como empresa, ofrecemos un servicio web para que cada persona pueda
            publicar o requerir trabajo, según su necesidad. Nuestro objetivo es
            satisfacer rápidamente la demanda de cada persona poniendo en
            contacto ambas partes, fomentando así, tanto el trabajo como
            soluciones.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FaqComponen
