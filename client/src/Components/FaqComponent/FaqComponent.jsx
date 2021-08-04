import React from 'react'

function FaqComponen() {
  return (
    <div class="bg-lightblue py-20 px-4">
      <div class="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 class="mr-8 mb-10 w-full md:w-1/3 text-3xl font-extrabold leading-9">
          Frequently-asked questions
        </h2>
        <dl class="w-full md:w-2/3">
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              ¿Que es changas / Quienes somos?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              Somos una empresa tecnologica que se encarga de conectar personas
              con diferentes rubros dividiendo en dos secciones principales,
              tanto para quien quiera ofrecer servicios de plomeria, gasista,
              etc, como tambien personas que requieran contratar dichos
              servicios.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              ¿Cual es nuestro objetivo / Nuestros sueños son?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              Como empresa, ofrecemos un servicio web para que cada persona
              pueda: publicar o requerir trabajo, segun su necesidad. Nuestro
              objetivo es satisfascer rapidamente la demanda de cada persona
              poniendo en contacto ambas partes, fomentando asi, tanto el
              trabajo como solucciones.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              ¿Donde me registro/ Donde descargo?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              Dirigete a nuestra barra inicial en el botton que dice
              *REGISTRAME*; ahi llenaras un formulario con los datos requeridos
              segun tu tipo de perfil.
            </p>
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default FaqComponen
