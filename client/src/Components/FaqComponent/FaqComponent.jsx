import React from 'react'
require('./FaqComponent.css')

function FaqComponen() {
  return (
    <>
      <div class="container mx-auto">
        <div class="m-8 rounded overflow-hidden">
          <div class="group outline-none accordion-section" tabindex="1">
            <div class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white transition ease duration-500">
                ¿Qué es changas / Quienes somos?
              </div>
              <div class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-gray-400 text-justify">
                Somos una empresa tecnológica que se encarga de conectar
                personas con diferentes rubros, dividiendo en dos secciones
                principales, tanto para quienes ofrecen servicios de plomeria,
                gasista, etc, como también personas que requieran contratar
                dichos servicios.
              </p>
            </div>
          </div>

          <div class="group outline-none accordion-section" tabindex="2">
            <div class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white transition ease duration-500">
                ¿Cual es nuestro objetivo / Nuestros sueños son?
              </div>
              <div class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-gray-400 text-justify">
                Como empresa, ofrecemos un servicio web para que cada persona
                pueda publicar o requerir trabajo, según su necesidad. Nuestro
                objetivo es satisfacer rápidamente la demanda de cada persona
                poniendo en contacto ambas partes, fomentando así, tanto el
                trabajo como soluciones.
              </p>
            </div>
          </div>

          <div class="group outline-none accordion-section" tabindex="2">
            <div class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white transition ease duration-500">
                ¿Dónde me registro?
              </div>
              <div class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-gray-400 text-justify">
                Dirígete a nuestra barra inicial en el botón que dice
                REGISTRATE; ahí te llevará hacia otra página donde llenarán un
                formulario con los datos requeridos según tu tipo de perfil.
              </p>
            </div>
          </div>

          <div class="group outline-none accordion-section" tabindex="2">
            <div class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white transition ease duration-500">
                ¿De donde nace la idea del servicio?
              </div>
              <div class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-gray-400 text-justify">
                La idea principal nace en querer ayudar a quienes perdieron sus
                trabajos a causa de la pandemia, proporcionándoles la
                posibilidad de tener contratación directa con clientes mediante
                nuestro sitio web.
              </p>
            </div>
          </div>

          <div class="group outline-none accordion-section" tabindex="3">
            <div class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white transition ease duration-500">
                Title for Tab - 3
              </div>
              <div class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-gray-400 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex items-center ">
          <div class="container mx-auto">
            <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-lg shadow-lg">
              <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold">
                  Contanos tu experiencia
                </h1>
                <p class="text-gray-400 dark:text-gray-400">
                  Completa abajo y envianos un mensaje
                </p>
              </div>
              <div class="m-7">
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

                  <div class="mb-6">
                    <label
                      for="name"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Tu nombre aquí"
                      class="w-full px-3 py-2 placeholder-gray-300 border 
                        border-gray-300 rounded-md focus:outline-none focus:ring 
                        focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 
                        dark:text-white dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Dirección de Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Tu email aquí"
                      class="w-full px-3 py-2 placeholder-gray-300 border 
                        border-gray-300 rounded-md focus:outline-none focus:ring 
                        focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 
                        dark:text-white dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="message"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Tu mensaje
                    </label>
                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      placeholder="Tu mensaje aquí"
                      class="w-full px-3 py-2 placeholder-gray-300 border 
                        border-gray-300 rounded-md focus:outline-none focus:ring 
                        focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 
                        dark:text-white dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      required
                    ></textarea>
                  </div>
                  <div class="mb-6">
                    <button
                      type="submit"
                      class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md 
                        focus:bg-indigo-600 focus:outline-none"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                  <p
                    class="text-base text-center text-gray-400"
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
