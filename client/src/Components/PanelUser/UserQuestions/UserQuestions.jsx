import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SideBarUser from '../SideBarUser/SideBarUser'
import { getAllQuestions } from '../../../Redux/actions'
import ModalQuestionValidate from './modalQuestion';

function UserPost() {
  //const allQuestions = useSelector((state) => state.allQuestions)
  const userLogin = useSelector(state => state.userLogin);
  const allQuestions = useSelector(state => state.allQuestions)

  let userQuestions = []
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllQuestions()) // aca tiene que ir una action que vamos a crear que sea getAllQuestions
  }, [dispatch])

  if (allQuestions.length) {
    userQuestions = allQuestions.filter(e => userLogin.id === e.post.user.id && e.answers.length === 0) // filtrar las posteos (que traen asociadas sus questions), cuyo user.id === user_id de auth0 (login) Y: que tengan questions Y que no tengan answers  
  }


  // console.log(filterQuestions)
  // console.log(allReview)

  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
      <div className="flex items-start justify-between">
        <SideBarUser />
        {userQuestions.length > 0 ? userQuestions?.map((q) => {

          return (
            <>
              <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tr className="text-center border-b-2 border-gray-300">
                  <th className="px-4 py-3 w-12">Nombre</th>
                  <th className="px-2 py-3 w-40">Publicación</th>
                  <th className="px-4 py-3 w-52">Pregunta</th>
                  <th className="px-2 py-3 w-12">Opciones</th>
                </tr>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <td className="px-4 py-3">{q.user?.given_name}</td>
                  <th className="px-4 py-3 w-52">{q.post.title}</th>
                  <td className="px-4 py-3">{q.question}</td>
                  <td className="px-4 py-3">
                    <button className="bg-blue-600 hover:bg-green-500 text-white decoration-none font-bold py-2 px-4 rounded-full">
                      <ModalQuestionValidate question={q} />
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
                <h1 className=''>Aún no recibiste ninguna nueva pregunta</h1>
              </div>
            </div>
          </div>
        }


      </div>
    </main>
  )

}

export default UserPost
