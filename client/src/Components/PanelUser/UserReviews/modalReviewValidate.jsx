import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateReview, deleteReview } from '../../../Redux/actions'
import { useHistory } from "react-router-dom";




const ModalReviewValidate = ({ review }) => {
  const [showModal, setShowModal] = useState(false)
  const { push } = useHistory()
  const dispatch = useDispatch()

  function handleClickAccept() {
    dispatch(updateReview({ isValidated: true }, review.id))
    setShowModal(false)
    push(`/posts/${review.post.id}`)
  }

  function handleClickDenied() {
    dispatch(deleteReview(review.id))
    setShowModal(false)
    alert("Reseña eliminada")
    push(`/user`)
  }


  return (
    <>
      <button
        className="flex ml-auto text-white  border-0 py-2 px-6 rounded decoration-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Revisar reseña
      </button>
      {showModal ? (
        <>
          <div className="overscroll-none overscroll-behavior: none justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white text-black outline-none focus:outline-none">
                <div className="flex items-start justify-between pt-5 pl-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">ATENCIÓN</h3>

                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="bg-white rounded-md p-2 mr-5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative  flex-auto ">
                  <p className="my-4 px-5 text-blueGray-500 font-normal text-lg text-left leading-relaxed ">
                    - Verificá que la persona que te haya dejado una reseña <b>sea
                      efectivamente</b> aquella a quién le hayas prestado un
                    servicio ó realizado un trabajo. NO confirmes reseñas de personas que NO conozcas.
                  </p>
                  <p className="my-4 px-5 text-blueGray-500 font-normal text-lg text-left leading-relaxed ">
                    - Cualquier reseña que aceptes <b>aparecerá </b> en tu
                    publicación.
                  </p>
                  <p className="my-4 px-5 text-blueGray-500 font-normal text-lg text-left leading-relaxed ">
                    - Si tenes algún problema o no conocés a la persona que te la envió,<b> ANTES de rechazarla</b> <a href="mailto:" >contactá al equipo de CHANGAS</a> para poder ayudarte.
                  </p>
                </div>
                <div className="grid grid-cols-2  ">


                  <div className="flex items-center justify-center   rounded-b">
                    <button
                      className="mb-5 mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleClickDenied}
                    >

                      <button className="flex ml-auto font-bold text-white bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-red-600 rounded">
                        Rechazar Reseña
                      </button>

                    </button>
                  </div>
                  <div className="flex items-center justify-center   rounded-b">
                    <button
                      className="mb-5 mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleClickAccept}
                    >

                      <button className="flex ml-auto font-bold text-white bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-green-600 rounded">
                        Confirmar Reseña
                      </button>

                    </button>
                  </div>
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
export default ModalReviewValidate
