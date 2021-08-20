import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SideBarUser from '../SideBarUser/SideBarUser'
import { getAllReviews } from '../../../Redux/actions'
import ModalQuestionValidate from './modalQuestion';

function UserPost() {
  const allReview = useSelector((state) => state.allReview)

  let filterReviews = []

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllReviews()) // aca tiene que ir una action que vamos a crear que sea getAllQuestions
  }, [dispatch])

  if (allReview.length) {
    filterReviews = allReview.filter(e => e.isValidated === false) // filtrar las posteos (que traen asociadas sus questions), cuyo user.id === user_id de auth0 (login) Y: que tengan questions Y que no tengan answers Y 
  }

  console.log(filterReviews)
  // console.log(allReview)
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
      <div className="flex items-start justify-between">
        <SideBarUser />
        <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
          <tr className="text-center border-b-2 border-gray-300">
            <th className="px-4 py-3 w-12">Nombre</th>
            <th className="px-2 py-3 w-40">Publicación</th>
            <th className="px-4 py-3 w-52">Pregunta</th>
            <th className="px-2 py-3 w-12">Opciones</th>
          </tr>


          {allReview.length > 0 ? filterReviews?.map((r) => {

            return (
              <>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <td className="px-4 py-3">{r.user?.fullName}</td>
                  <td className="px-4 py-3">{r.post?.title}</td>
                  <th className="px-2 py-3">Ver Pregunta</th>
                  <td className="px-4 py-3">
                    <button className="bg-green-300 hover:bg-green-500 text-white decoration-none font-bold py-2 px-4 rounded-full">
                      {<ModalQuestionValidate review={r} />}
                    </button>
                  </td>
                </tr>

              </>
            )
          })
            : null
          }


        </table>
      </div>
    </main>
  )
}

export default UserPost
