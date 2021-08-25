import React from 'react'
require('./FaqComponent.css')


function FaqComponen() {
  return (
    <>
      <h1 className="mt-5 mb-5 text-black text-4xl">FAQ - Preguntas Frecuentes</h1>
      <div className="container sm:w-2/3 md:w-1/2 mx-auto">
        <div className="m-2 rounded shadow-2xl overflow-hidden">
          <div className="group outline-none  accordion-section" tabIndex="1">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-orange transition ease duration-500">
                ¿Qué es CHANGAS / Quiénes somos?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Somos una empresa tecnológica que{' '}
                <strong>conecta personas</strong> que{' '}
                <strong>buscan y ofrecen trabajos no profesionales.</strong>{' '}
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                En criollo,{' '}
                <strong>cualquier persona que necesite de alguien</strong> para
                un trabajo o “changa” va a poder encontrarla con nuestra
                aplicación, y cualquier persona que quiera trabajar va poder
                ofrecer sus servicios.
              </p>

              <p className="p-2 text-lg	text-black antialiased text-justify">
                <strong>Generamos oportunidades. Damos soluciones.</strong>
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cuál es nuestra misión?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Estamos convencidos de que{' '}
                <strong>
                  cualquier persona que quiera y necesite trabajar tiene que
                  poder hacerlo
                </strong>
                , sin necesidad de hacerse un currículum hermoso, ni tener más
                de 500 contactos, ni hacer networking, ni nada. Las
                <strong>ganas de trabajar</strong> y el
                <strong> profesionalismo</strong> son los únicos dos requisitos
                <strong>indispensables </strong>
                para hacer cualquier “changa” o trabajo no profesional.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Y ahí entra <strong>CHANGAS:</strong> para vincular la oferta y
                la demanda de trabajo de forma rápida, sencilla, eficiente y sin
                vueltas.
              </p>
            </div>
          </div>

          <div className="group outline-none accordion-section" tabIndex="2">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿De dónde nace la idea?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Nos dimos cuenta de que no existía una solución sencilla para
                aquellas personas que tenían que encontrar una
                <strong> fuente de ingreso </strong>
                de forma rápida y eficaz: las propuestas y sitios actuales usan
                algoritmos que no dan visibilidad a quienes no cumplen con
                requisitos “impuestos”, y por eso no responden a la
                <strong>necesidad de encontrar trabajo rápido</strong>, sino que
                evalúan y categorizan a las personas por su
                <i>“perfil virtual”, “actividad”, “publicaciones”, “red”</i>,
                etc. En pocas palabras, sólo si son <i>buenos usuarios</i> de esas aplicaciones
                son “empleables/contratables”.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                <strong>Vinimos a cambiar esto.</strong>
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Existimos para ayudar a quienes no tienen los contactos, ni los conocimientos ni el tiempo para hacer
                "networking", redactar "publicaciones" ó generar "redes de contactos".
              </p> <p className="p-2 text-lg	text-black antialiased text-justify">
                Existimos ayudar a aquellos que quieran trabajar <i>puedan hacerlo,</i> lisa y llanamente.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Estamos convencidos de que lo único importante para poder trabajar es <strong>querer hacerlo y ser profesional </strong> al
                respecto. El resto, es puro cuento.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                <strong>CHANGAS no es una red social</strong>: es una solución a
                esos problemas de visibilización de gente que quiere trabajar.
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
                ☑️ Poseemos un método de búsquedas por GPS y rango de distancias para ayudarte en tu búsqueda de ofertas y pedidos de "changas" de forma rápida e intuitiva, pudiéndolo hacer desde
                tu ubicación actual. </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                ☑️ Vas a poder guardar las publicaciones que más te interesen para ponerte en contacto más tarde.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                ☑️ Una vez realizados los trabajos o servicios, vas a poder <b>puntuar y recomendar </b> a los prestadores de los mismos
                por su desempeño y profesionalismo. Son sus clientes quienes lo hacen directamente en las
                publicaciones de los usuarios.{' '}
                <strong>
                  Más trabajos bien hechos, más comentarios positivos, más
                  ofertas de trabajo
                </strong>{' '}
                van a recibir. ¿No es genial?
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                ☑️ Vas a poder encontrar "changas" en el día!!
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Estos son algunos de los aspectos de nuestro servicio, pero de
                seguro te preguntarás si hay algún costo adicional escondido en
                la contratación. Para sorpresa de todos, decidimos que sea{' '}
                <strong>TOTALMENTE GRATIS</strong>. Sí, leelo de vuelta, para
                quién busca trabajo como para quién lo ofrece es GRATIS.
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
                <strong>Si buscás trabajo</strong>, primero necesitas
                registrarte. Lo haces en menos de 3 minutos.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                <strong>Si ofrecés trabajo</strong>, primero necesitas
                registrarte. Lo haces en menos de 3 minutos.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Una vez registrado, buscas todas las ofertas, las puedes filtrar
                según los criterios que mejor se ajusten a vos. ¡Vas a encontrar
                alguna,{' '}
                <strong>incluso si buscás un trabajo de un sólo día!</strong>
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                <strong>Si ofrecés trabajo</strong>, creá un anuncio indicando
                lo necesario. Sin costo adicional. Un ofertón.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-5 mb-5 text-black text-4xl">FAQ - Ofrecer servicios</h1>

      <div className="container sm:w-2/3 md:w-1/2 mx-auto">
        <div className="m-2 rounded shadow-2xl overflow-hidden">
          <div className="group outline-none  accordion-section" tabIndex="1">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Qué necesito para registrarme?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Para ingresar deberás registrarte con tu cuenta de Gmail y
                llenar el formulario correspondiente con tus datos antes de realizar cualquier publicación.</p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Dicho formulario tiene carácter de declaración jurada.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Debés ser{' '}
                <strong>mayor de 18 años</strong>.
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
                Una vez registrados todos tus datos y logueado en la aplicación,
                hacé click en la sección "Publicar", completá los campos según el tipo de publicación y listo!
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Podés <strong>promocionar </strong>tus publicaciones para tener
                mas visibilidad!
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-5 mb-5 text-black text-4xl">
        FAQ - Contratar servicios
      </h1>

      <div className="container sm:w-2/3 md:w-1/2 mx-auto">
        <div className="m-2 rounded shadow-2xl overflow-hidden">
          <div className="group outline-none  accordion-section" tabIndex="1">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-black transition ease duration-500">
                ¿Cuáles son los beneficios?
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Podés <i>contactar directamente</i> a los prestadores de
                servicios o a quienes ofrezcan trabajo sin costos adicionales ni comisiones, es{' '}
                <strong>GRATIS</strong>.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                ¿A quién se le ocurriría cobrar algo para
                acceder a los datos de contacto? ¡A nosotros no!
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
                Simple, en la pagina principal buscas un servicio que te
                interese, le haces click, consultas los datos del prestador del
                servicio y te ponés en contacto.
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
                Changas se encarga <i>únicamente </i>de poner en contacto a las partes que desean trabajar y pagar por dicho trabajo.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Una vez prestado el servicio o realizado el trabajo, el usuario "cliente" puede dejar una
                reseña y un puntaje por la calidad del servicio en la
                publicación del mismo.</p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Así <strong> ayudamos </strong> a quiénes cumplen con su trabajo a
                <strong> conseguir más clientes.</strong>
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
                Todo lo que refiere a métodos de pago de los trabajos o servicios queda a <strong>elección de
                  ambas partes</strong>, pudiendo el usuario dueño de la publicación indicar ahí su preferencia.
              </p>
              <p className="p-2 text-lg	text-black antialiased text-justify">
                Para <b>promocionar</b> tus publicaciones, podés pagar mediante MercadoPago o cualquier tarjeta de crédito o débito.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center ">
          <div className="container mx-auto p-4">
            <div className="max-w-md md:w-1/2 sm:2/3 shadow-2xl mx-auto my-10 bg-gray-800 text-white p-5 rounded-lg shadow-lg">
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
                    value={`${process.env.REACT_APP_API_KEY}`}
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Submission from Web3Forms"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://changas.vercel.app/home"
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
    </>
  )
}

export default FaqComponen
