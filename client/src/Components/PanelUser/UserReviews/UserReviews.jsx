import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SideBarUser from '../SideBarUser/SideBarUser'
import { getAllReviews } from '../../../Redux/actions'
import ModalReviewValidate from './modalReviewValidate';

function UserPost() {
  const allReview = useSelector((state) => state.allReview)
  const userLogin = useSelector(state => state.userLogin);

  let filterReviews = []

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllReviews()) // aca hay un problema. Me trae todas las reviews, yo solo quiero las del usuario. Hay que filtrarlo en el back con getUserReviews
  }, [dispatch])

  if (allReview.length) {
    filterReviews = allReview.filter(e => e.isValidated === false && userLogin.id !== e.user.id) // filtra las reviews no validadas Y que no hayan sido hechas por el usuario que las revisa
  }

  // console.log(filterReviews)
  // console.log(allReview)
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
      <div className="flex items-start justify-between">
        <SideBarUser />
        {filterReviews.length > 0 ? filterReviews?.map((r) => {

          return (
            <>
              <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tr className="text-center border-b-2 border-gray-300">
                  <th className="px-4 py-3">Nombre</th>
                  <th className="px-4 py-3">Publicación</th>
                  <th className="px-2 py-3">Validación</th>
                </tr>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <td className="px-4 py-3">{r.user?.fullName}</td>
                  <td className="px-4 py-3">{r.post?.title}</td>
                  <td className="px-4 py-3">
                    <button className="bg-blue-600 hover:bg-green-500 text-white decoration-none font-bold py-2 px-4 rounded-full">
                      <ModalReviewValidate review={r} />
                    </button>
                  </td>
                </tr>
              </table>
            </>
          )
        })
          :
          <div className="flex flex-col w-full md:space-y-4">
            <div className="overflow-auto h-screen pb-24 py-12 px-4 md:px-6">
              <div className="bg-white divide-y divide-gray-200 flex justify-center">
                <h1 className=''>Aún no recibiste ninguna nueva reseña</h1>
              </div>
            </div>
          </div>
        }


      </div>
    </main>
  )
}

export default UserPost
