import React from 'react'
require('./FaqComponent.css')

function FaqComponen() {
  return (
    <>
      <h1 className="mt-5 text-black text-4xl">FAQ</h1>
      <div className="container w-1/3 mx-auto">
        <div className="m-2 rounded overflow-hidden">
          <div className="group outline-none accordion-section" tabindex="1">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-orange transition ease duration-500">
                ¿Qué es changas / Quienes somos?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Somos una empresa tecnológica que se encarga de conectar
                personas con diferentes rubros, dividiendo en dos secciones
                principales, tanto para quienes ofrecen servicios de plomeria,
                gasista, etc, como también personas que requieran contratar
                dichos servicios.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabindex="2">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cual es nuestro objetivo / Nuestros sueños son?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Como empresa, ofrecemos un servicio web para que cada persona
                pueda publicar o requerir trabajo, según su necesidad. Nuestro
                objetivo es satisfacer rápidamente la demanda de cada persona
                poniendo en contacto ambas partes, fomentando así, tanto el
                trabajo como soluciones.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabindex="2">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Dónde me registro?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Dirígete a nuestra barra inicial en el botón que dice
                REGISTRATE; ahí te llevará hacia otra página donde llenarán un
                formulario con los datos requeridos según tu tipo de perfil.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabindex="2">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿De donde nace la idea del servicio?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                La idea principal nace en querer ayudar a quienes perdieron sus
                trabajos a causa de la pandemia, proporcionándoles la
                posibilidad de tener contratación directa con clientes mediante
                nuestro sitio web.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabindex="2">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Por qué utilizar nuestra plataforma de servicios?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Poseemos un método de búsquedas por GPS y rango de distancias
                que te proporcionará contratar de forma muy rápida el servicio
                que desees, como así también cuenta con una sección de favoritos
                para calificar el servicio y volver a contactar las mismas
                personas. Estos son algunos de los aspectos de nuestro servicio,
                pero de seguro te preguntas qué costo te saldrá adicional a la
                contratación, para la sorpresa de todos y como en CHANGAS
                sabemos el difícil momento que atraviesas decidimos que sea
                TOTALMENTE GRATIS, así es GRATIS solo te pedimos que llenes la
                sección de feedback para poder seguir mejorando tu experiencia!!
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-5 text-black text-4xl">FAQ - Ofrecer servicios</h1>
      <div className="container w-1/3 mx-auto">
        <div className="m-2 rounded overflow-hidden">
          <div className="group outline-none accordion-section" tabindex="1">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Qué necesito para registrarme?
              </div>
            </div>

            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Para ingresar deberás registrarte con tu correo electrónico y
                llenar el formulario correspondiente a tu tipo de cuenta en las
                diferentes secciones. Debes ser mayor de 18 años y mantener los
                protocolos de higiene pactados en el formulario.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabindex="2">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cómo publico mi servicio?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Dirígete a la sección de post, ahora ve al botón crear post,
                perfecto, ahora necesitas llenar todos los campos para tener un
                posteo exitoso!!
              </p>
            </div>
          </div>

          <h1 className="mt-5 text-black text-4xl">FAQ - Contratar servicios</h1>

          <div className="mt-3 group outline-none accordion-section" tabindex="2">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Qué beneficios tiene adquirir este servicio?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Dentro de los varios beneficios que posees en el sitio web es
                que ofrecemos contratación directa, sin costos adicionales como
                comisiones, es GRATIS, además de que contas con la posibilidad
                de negociar directamente con la persona que te ofrece el
                servicio, pudiendo así mejorar los plazos de pago y flexibilidad
                de los mismos.
              </p>
            </div>
          </div>
          <div className=" group outline-none accordion-section" tabindex="2">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cómo contrato un servicio?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Simple, dirígete a la pantalla principal y presiona el botón de
                Posteos, en esta sección nos dirigimos a la tarjetas de los
                trabajos ofrecidos y si no encuentras lo que buscas, puedes
                filtrar según el tipo y disponibilidad del servicio además de
                buscar por zonas alrededor de ti.
              </p>
            </div>
          </div>
          <div className=" group outline-none accordion-section" tabindex="2">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cómo funciona el servicio?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Una vez pactado con la persona encargada de dar el servicio,
                deberás confirmar a través del sitio web el día pactado y formas
                de pago para dejar una constante y evitar inconvenientes a
                futuro. Una vez terminado el servicio te pediremos que
                califiques el mismo para dejar registrada tu experiencia.
              </p>
            </div>
          </div>
          <div className=" group outline-none accordion-section" tabindex="2">
            <div className="group bg-gray-200 flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Qué métodos de pago aceptan?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-yellow-500 px-4 overflow-hidden ease duration-500">
              <p className="p-5 text-lg	text-black antialiased font-medium text-justify">
                Todo lo que refiere a métodos de pago queda bajo control de
                ambas partes en el método de contacto de servicios.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center ">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10 bg-gray-200 p-5 rounded-lg shadow-lg">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold">
                  Contanos tu experiencia
                </h1>
                <p className="text-black dark:text-gray-400">
                  Completa abajo y envianos un mensaje
                </p>
              </div>
              <div className="m-7">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  id="form"
                >
                  <input
                    type="hidden"
                    name="apikey"
                    value="9f880591-b81c-4e21-9e48-5b06ff409af0"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Submission from Web3Forms"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://web3forms.com/success"
                  />

                  <div className="mb-6">
                    <label
                      for="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Tu nombre aquí (Opcional)"
                      className="w-full px-3 py-2 placeholder-gray-300 border 
                        border-gray-300 rounded-md focus:outline-none focus:ring 
                        focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 
                        dark:text-white dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Dirección de Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Tu email aquí (Opcional)"
                      className="w-full px-3 py-2 placeholder-gray-300 border 
                        border-gray-300 rounded-md focus:outline-none focus:ring 
                        focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 
                        dark:text-white dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="message"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Tu mensaje
                    </label>
                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      placeholder="Tu mensaje aquí (Obligatorio)"
                      className="w-full px-3 py-2 placeholder-gray-300 border 
                        border-gray-300 rounded-md focus:outline-none focus:ring 
                        focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 
                        dark:text-white dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full px-3 py-4 font-semibold text-black bg-yellow-500 rounded-md 
                        focus:bg-yellow-600 focus:outline-solid"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                  <p
                    className="text-base text-center text-gray-400"
                    id="result"
                  ></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FaqComponen
