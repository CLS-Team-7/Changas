import React from 'react'

export const deletedUser = () => {
    return (
        <div>
        <div className="flex items-center ">
          <div className="container mx-auto">
            <div className="max-w-md shadow-2xl mx-auto my-10 bg-gray-800 text-white p-5 rounded-lg shadow-lg">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold">
                  Contanos tu experiencia
                </h1>
                <p className="text-white dark:text-gray-400">
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
                    <label className="block mb-2 text-sm text-white dark:text-gray-400">
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
                        text-black dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm text-white dark:text-gray-400">
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
                        text-black dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm text-white dark:text-gray-400">
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
                        text-black dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full px-3 py-4 font-semibold text-black bg-white rounded-md 
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
    )
}

export default deletedUser
