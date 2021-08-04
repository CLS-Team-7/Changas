import React from 'react'

function FaqComponen() {
  return (
    <div>
      <section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Preguntas frecuentes
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Algunas de nuestras preguntas frecuentes, aquí las respuestas
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué es Changas / Quienes somos?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Cuál es nuestro objetivo / nuestros sueños son?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Dónde me registro?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿De donde sale la idea del servicio?
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Por que utilizar nuestra plataforma de servicios?
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Cómo contrato un servicio?
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FaqComponen
