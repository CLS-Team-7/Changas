import React from 'react'
require('./FaqComponent.css')

function FaqComponen() {
  return (
    <>
      <h1 className="mt-5 mb-5 text-black text-4xl">FAQ</h1>
      <div className="container w-1/2 mx-auto">
        <div className="m-2 rounded shadow-2xl overflow-hidden">
          <div className="group outline-none  accordion-section" tabIndex="1">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-orange transition ease duration-500">
                ¿Qué es changas / Quienes somos?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Somos una empresa tecnológica que conecta personas que buscan y
                ofrecen trabajos no profesionales. En criollo, cualquier persona
                que necesite de alguien para un trabajo o “changa” va a poder
                encontrarla con nuestra aplicación, y cualquier persona que
                quiera trabajar va poder ofrecer sus servicios.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Generamos oportunidades. Damos soluciones.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cual es nuestra misión?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Estamos convencidos de que cualquier persona que quiera y
                necesite trabajar tiene que poder hacerlo, sin necesidad de
                hacerse un currículum hermoso, ni tener más de 500 contactos, ni
                hacer networking, ni nada. Las ganas de trabajar y el
                profesionalismo son los únicos dos requisitos indispensables
                para hacer cualquier “changa” o trabajo no profesional.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Y ahí entra CHANGAS: para vincular la oferta y la demanda de
                trabajo de forma rápida, sencilla, eficiente y sin vueltas.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿De donde nace la idea?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Nos dimos cuenta de que no existía una solución sencilla para
                aquellas personas que tenían que encontrar una fuente de ingreso
                de forma rápida y eficaz: las propuestas y sitios actuales usan
                algoritmos que no dan visibilidad a quienes no cumplen con
                requisitos “impuestos”, y por eso no responden a la necesidad de
                encontrar trabajo rápido, sino que evalúan y categorizan a las
                personas por su “perfil virtual”, “actividad”, “publicaciones”,
                “red”, etc. En pocas palabras, sólo si son buenos usuarios son
                “empleables/contratables”.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Vinimos a cambiar esto: existimos para ayudar a quienes no
                teniendo los contactos, ni los conocimientos de networking, ni
                las publicaciones, ni las redes de contactos puedan encontrar
                trabajo, porque lo que importa es querer trabajar y ser
                profesional al respecto. El resto, es puro cuento.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                CHANGAS no es una red social: es una solución a esos problemas
                de visibilización de gente que quiere trabajar.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Por qué somos diferentes del resto?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Poseemos un método de búsquedas por GPS y rango de distancias
                que te proporcionará contratar de forma muy rápida el servicio
                que desees en dónde te encuentras, como así también contamos con
                una sección de favoritos para calificar el servicio y volver a
                contactar las mismas personas.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Quienes ofrezcan sus servicios serán puntuados y recomendados
                por su desempeño y profesionalismo, una vez realizados los
                trabajos. Son sus clientes quienes lo hacen directamente en los
                perfiles de los usuarios: más trabajos bien hechos, más
                comentarios positivos, más ofertas de trabajo van a recibir. ¿No
                es genial?
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Estos son algunos de los aspectos de nuestro servicio, pero de
                seguro te preguntarás si hay algún costo adicional escondido en
                la contratación. Para la sorpresa de todos, decidimos que eso
                sea TOTALMENTE GRATIS. Si, leelo de vuelta, para quien busca
                trabajo es así, es GRATIS.
              </p>
            </div>
          </div>
          <div className="group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cómo empiezo?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Si buscas trabajo, primero necesitas registrarte. Lo haces en
                menos de 3 minutos.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Si ofreces trabajo, primero necesitas registrarte. Lo haces en
                menos de 3 minutos.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Una vez registrado, buscas todas las ofertas, las puedes filtrar
                según los criterios que mejor se ajusten a vos. ¡Vas a encontrar
                alguna, incluso si buscas un trabajo de un sólo día!
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Si ofreces trabajo, crea un anuncio indicando lo necesario. Sin
                costo adicional. Un ofertón.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-5 mb-5 text-black text-4xl">FAQ - Ofrecer servicios</h1>

      <div className="container w-1/2 mx-auto">
        <div className="m-2 rounded shadow-2xl overflow-hidden">
          <div className="group outline-none  accordion-section" tabIndex="1">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Qué necesito para registrarme?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Para ingresar deberás registrarte con tu correo electrónico y
                llenar el formulario correspondiente a tu tipo de cuenta en las
                diferentes secciones. Debes ser mayor de 18 años y mantener los
                protocolos de higiene pactados en el formulario. El mismo tiene
                carácter de declaración jurada.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cómo hago una publicación?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Dirígete a la sección de post, ahora ve al botón crear post,
                ahora necesitas llenar todos los campos según el tipo de
                publicación para realizar un posteo exitoso!!
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-5 mb-5 text-black text-4xl">
        FAQ - Contratar servicios
      </h1>

      <div className="container w-1/2 mx-auto">
        <div className="m-2 rounded shadow-2xl overflow-hidden">
          <div className="group outline-none  accordion-section" tabIndex="1">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cuáles son los beneficios?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Podés contratar directamente en nuestra aplicación, sin costos
                adicionales como comisiones, es GRATIS. Además de que contás con
                la posibilidad de negociar directamente con la persona que te
                ofrece el servicio, pudiendo así adaptar mejor las necesidades
                de ambas partes, flexibilizando los tipos y plazos de pagos.
              </p>
            </div>
          </div>

          <div className=" group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cómo contrato?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Simple, dirígete a la pantalla principal y presiona el botón de
                Posteos, en esta sección nos dirigimos a la tarjetas de los
                trabajos ofrecidos y si no encuentras lo que buscas, puedes
                filtrar según el tipo y disponibilidad del servicio además de
                buscar por zonas alrededor tuyo.
              </p>
            </div>
          </div>
          <div className=" group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cómo funciona el servicio?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Una vez pactado con la persona encargada de dar el servicio,
                deberás confirmar a través del sitio web el día pactado y formas
                de pago para dejar una constante y evitar inconvenientes a
                futuro. Una vez terminado el servicio te pediremos que
                califiques el mismo para dejar registrada tu experiencia.
              </p>
            </div>
          </div>
          <div className=" group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Qué métodos de pago aceptan?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
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
                    <label
                      className="block mb-2 text-sm text-white dark:text-gray-400"
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
                      className="block mb-2 text-sm text-white dark:text-gray-400"
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
                      className="block mb-2 text-sm text-white dark:text-gray-400"
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
    </>
  )
}

export default FaqComponen
