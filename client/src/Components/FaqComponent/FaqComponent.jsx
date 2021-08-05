import React from 'react'

function FaqComponen() {
  return (
    <div class="bg-lightblue py-20 px-4">
      <div class="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 class="mr-8 mb-10 w-full md:w-1/3 text-3xl font-extrabold leading-9">
          FAQ
        </h2>
        <dl class="w-full md:w-2/3">
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              ¿Qué es changas / Quienes somos?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              Somos una empresa tecnológica que se encarga de conectar personas
              con diferentes rubros, dividiendo en dos secciones principales,
              tanto para quienes ofrecen servicios de plomeria, gasista, etc,
              como también personas que requieran contratar dichos servicios.
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
              pueda publicar o requerir trabajo, según su necesidad. Nuestro
              objetivo es satisfacer rápidamente la demanda de cada persona
              poniendo en contacto ambas partes, fomentando así, tanto el
              trabajo como soluciones.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              ¿De donde nace la idea del servicio?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              La idea principal nace en querer ayudar a quienes perdieron sus
              trabajos a causa de la pandemia, proporcionándoles la posibilidad
              de tener contratación directa con clientes mediante nuestro sitio
              web.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">¿Dónde me registro?</h3>
          </dt>
          <dd class="mb-16">
            <p>
              Dirígete a nuestra barra inicial en el botón que dice REGISTRATE;
              ahí te llevará hacia otra página donde llenarán un formulario con
              los datos requeridos según tu tipo de perfil.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              ¿Por qué utilizar nuestra plataforma de servicios?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              Poseemos un método de búsquedas por GPS y rango de distancias que
              te proporcionará contratar de forma muy rápida el servicio que
              desees, como así también cuenta con una sección de favoritos para
              calificar el servicio y volver a contactar las mismas personas.
            </p>
          </dd>
          {/* <dt class="mb-4">
            <h3 class="text-xl font-semibold">---------------------------</h3>
          </dt> */}
          <dd class="mb-16">
            <p class="text-xl font-semibold">
              Estos son algunos de los aspectos de nuestro servicio, pero de
              seguro te preguntas qué costo te saldrá adicional a la
              contratación, para la sorpresa de todos y como en CHANGAS sabemos
              el difícil momento que atraviesas decidimos que sea TOTALMENTE
              GRATIS, así es GRATIS solo te pedimos que llenes la sección de
              feedback para poder seguir mejorando tu experiencia!!
            </p>
          </dd>
        </dl>
      </div>
      <div class="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 class="mr-8 mb-10 w-full md:w-1/3 text-3xl font-extrabold leading-9">
          FAQ para quienes ofrecen servicios
        </h2>
        <dl class="w-full md:w-2/3">
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              ¿Qué necesito para registrarme?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              Para ingresar deberás registrarte con tu correo electrónico y
              llenar el formulario correspondiente a tu tipo de cuenta en las
              diferentes secciones.
            </p>
            <p>
              Debes ser mayor de 18 años y mantener los protocolos de higiene
              pactados en el formulario.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">¿Cómo publico mi servicio?</h3>
          </dt>
          <dd class="mb-16">
            <p>
              Dirígete a la sección de post, ahora ve al botón crear post,
              perfecto, ahora necesitas llenar todos los campos para tener un
              posteo exitoso!!
            </p>
          </dd>
          <dd class="mb-16">
            <p class="text-xl font-semibold">
              Así de simple, bienvenido a CHANGAS ya estás listo para comenzar!!
              Ahora a esperar que te contacten..!!
            </p>
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default FaqComponen
