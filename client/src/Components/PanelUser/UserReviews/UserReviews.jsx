import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SideBarUser from '../SideBarUser/SideBarUser'
import { getAllPosts } from '../../../Redux/actions'

function UserPost() {
  const postUsers = useSelector((state) => state.postList)
  const userLogin = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()

  const FilterPost = postUsers.filter((e) => e.user?.id === userLogin.id)
  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
      <div className="flex items-start justify-between">
        <SideBarUser />
        <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
          <tr className="text-center border-b-2 border-gray-300">
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Post</th>
            <th className="px-1 py-3">Estrellas</th>
            <th className="px-5 py-3">Comentario</th>
            <th className="px-2 py-3">Validacion</th>
          </tr>

          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">Pablo</td>
            <td className="px-4 py-3">Ofrezco X</td>
            <td className="px-4 py-3">4</td>
            <td className="px-4 py-3">Expectacular todo</td>
            <td className="px-4 py-3">
              <button className="bg-green-300 hover:bg-green-500 text-white decoration-none font-bold py-2 px-4 rounded-full">
                Aceptar
              </button>
            </td>
          </tr>
        </table>
      </div>
    </main>
  )
}

export default UserPost
