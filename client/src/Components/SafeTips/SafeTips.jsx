import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearSinglePost, getSinglePost } from "../../Redux/actions";

const SafeTips = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.singlePost);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getSinglePost(id));
    dispatch(clearSinglePost());
  }, [dispatch, id]);
  return (
    <>
      <button
        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded  "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Contactar
      </button>
      {showModal ? (
        <>
          <div className="overscroll-none overscroll-behavior: none justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between pt-5 pl-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Consejos de Seguridad
                  </h3>

                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    class="bg-white rounded-md p-2 mr-5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>

                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative  flex-auto ">
                  <p className="my-4 px-5 text-blueGray-500 text-sm text-left leading-relaxed ">
                    Está comprobado que la gran mayoría de servicios contratados
                    por internet terminan siendo experiencias positivas tanto
                    para el profesional como para el cliente.
                  </p>
                  <p className="my-4 px-5 text-blueGray-500 text-sm text-left leading-relaxed ">
                    Nuestro objetivo es beneficiar el trabajo honesto y de
                    calidad, beneficiando a ambas partes. Somos buena gente,
                    como vos. Por ello te pedimos que sigas atentamente estas
                    sugerencias y nos ayudes a construir una comunidad segura
                    para todos, cuidándote vos y cuidando al resto de los
                    usuarios.
                  </p>
                </div>
                <div className="border-t border-solid border-blueGray-200 text-xs py-5 text-left">
                  <li className="px-5">
                    En CHANGAS <b> no proponemos contratos laborales </b> de
                    ningún tipo, si te dicen lo contrario, te están mintiendo.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Antes de coordinar una visita, <b> chequeá los datos </b>{" "}
                    del prestador del servicio/cliente.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    <b>
                      {" "}
                      Lee atentamente los comentarios y reseñas de la
                      publicación{" "}
                    </b>
                    .
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Nunca reveles tus contraseñas ni claves bancarias. NO
                    compartas estos datos con NINGÚN usuario. Si alguien te los
                    pide te solicitamos que realices el{" "}
                    <b> reporte/denuncia </b>
                    correspondiente.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Nadie trabajando para CHANGAS va a pedirte que le envíes
                    información sensible como la mencionada en el párrafo
                    anterior
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Para contratar un servicio <b> no es obligatorio </b> que
                    realices el pago con anticipación, ambas partes podrán
                    coordinar la metodología de pago que más les convenga.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Sugerimos <b> coordinar por chat </b> los detalles y
                    pormenores de los servicios que se vayan a contratar. Esto
                    te permitirá contar con{" "}
                    <b> información escrita y correcta </b>, evitando malos
                    entendidos.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Es importante <b> que dejes una opinión </b> sobre el
                    usuario que te presto el servicio, ya que esto nos ayuda a
                    crecer como comunidad. Tanto si el resultado fue positivo o
                    no, queremos saber si estás satisfecho con el servicio que
                    contrataste. De esta forma ayudas a otras personas a elegir
                    con mayor confianza y al profesional que logrará multiplicar
                    su cantidad de trabajo.
                  </li>{" "}
                  <li className="mt-3 text-left px-5 ">
                    Asegúrate antes de realizar cualquier pago que el
                    <b> presupuesto contemple </b> todo lo necesario, inclusive
                    el precio final.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Respeta las medidas de prevención para evitar contagios de
                    COVID-19.
                  </li>
                </div>

                <div className="flex items-center justify-end   rounded-b">
                  <button
                    className="mb-5 mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Link to={`/profile/${user?.id}`} className="flex ml-auto">
                      <button className="flex ml-auto font-bold text-white bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-indigo-600 rounded">
                        Continuar
                      </button>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default SafeTips;
