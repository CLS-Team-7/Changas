import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { updateReview, deleteReview } from '../../../Redux/actions'
import { useHistory } from "react-router-dom";




const ModalQuestionValidate = ({ review }) => {
  const [showModal, setShowModal] = useState(false)
  const { push } = useHistory()
  const dispatch = useDispatch()

  function handleClickAccept() {
    // dispatch(updateReview({ isValidated: true }, review.id)) // aca se hace el dispatch a una accion que tenemos que crear (createAnswer), por params el idQuestion y body
    setShowModal(false)
    push(`/posts/${review.post.id}`)
  }

  function handleClickDenied() {
    // dispatch(deleteReview(review.id))  // aca se hace el dispatch a una accion que tenemos que crear (createReport), por payload se manda el user_id y la question_id
    // setShowModal(false)
    // alert("Reseña eliminada")
    // push(`/user`)
    //ESTE DEBERIA PODER REPORTAR/DENUNCIAR PREGUNTA
  }


  return (
    <>
      <button
        className="flex ml-auto text-white  border-0 py-2 px-6 rounded  "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Responder
      </button>
      {showModal ? (
        <>
          <div className="overscroll-none overscroll-behavior: none justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white text-black outline-none focus:outline-none">
                <div className="flex items-start justify-between pt-5 pl-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Escriba su respuesta</h3>

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

                <div className="relative flex flex-col ">
                  <div class="mb-3 py-4 px-4 flex flex-row">
                    <input type="text" placeholder="Tu respuesta va acá..."
                      class="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full" />
                    <button
                      className="mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleClickAccept}
                    >
                      <button className="flex ml-auto font-bold text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-green-600 rounded">
                        Responder
                      </button>

                    </button>
                  </div>


                  <p className="my-4 px-5 text-blueGray-500 text-lg text-left leading-relaxed ">
                    - Si tenés algun problema con la pregunta, podes hacer un <b>reportarla</b> para que el equipo de CHANGAS la revise.
                  </p>
                </div>


                <div className="flex items-center justify-center   rounded-b">
                  <button
                    className="mb-5 mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClickDenied}
                  >

                    <button className="flex ml-auto font-bold text-white bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-red-600 rounded">
                      Reportar pregunta
                    </button>

                  </button>
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
export default ModalQuestionValidate
