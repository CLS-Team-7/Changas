import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SideBarUser from '../SideBarUser/SideBarUser'
import { getAllReviews } from '../../../Redux/actions'
import ModalReviewValidate from './modalReviewValidate';

function UserPost() {
  const allReview = useSelector((state) => state.allReview)
  const userLogin = useSelector(state => state.userLogin);

  let validatedReviews = []
  let filterReviews = []

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllReviews())
  }, [dispatch])

  if (allReview?.length) {
    validatedReviews = allReview?.filter(e => e.isValidated === false) // filtra las reviews no validadas Y que no hayan sido hechas por el usuario que las revisa
    if (validatedReviews?.length && userLogin?.sub !== undefined) {
      filterReviews = validatedReviews.filter(e => e.post?.user?.sub !== userLogin?.sub) // CON !== NO TRAE LOS REVIEWS HECHOS POR UNO MISMO EN SU MISMO POSTEO
    }
  }


  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
      <div className="flex items-start justify-between">
        <SideBarUser />
        <div className="flex flex-col w-full md:space-y-4">
          <div className="overflow-auto h-screen pb-24 py-12 px-4 md:px-6">
            <table>
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Publicación
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Opciones
                  </th>
                </tr>
              </thead>
              {filterReviews.length > 0 ? filterReviews?.map((r) => {

                return (
                  <>

                    <tr className="bg-gray-100 border-b border-gray-200">
                      <td className="px-4 py-3">{r.user?.fullName}</td>
                      <td className="px-4 py-3">{r.post?.title}</td>
                      <td className="px-4 py-3">
                        <button className="bg-blue-600 hover:bg-green-500 text-white decoration-none font-bold py-2 px-4 rounded">
                          <ModalReviewValidate review={r} />
                        </button>
                      </td>
                    </tr>

                  </>
                )
              })
                :
                <div className="flex flex-col w-full md:space-y-4">
                  <div className="overflow-auto h-screen pb-24 py-12 px-4 md:px-6">
                    <div className="bg-white divide-y divide-gray-200 flex justify-center">
                      <h1 className=''>No recibiste ninguna reseña nueva</h1>
                    </div>
                  </div>
                </div>
              }
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UserPost
