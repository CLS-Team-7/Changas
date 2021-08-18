import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SideBarUser from '../SideBarUser/SideBarUser'
import { getAllPosts } from '../../../Redux/actions'
import ModalReviewValidate from './modalReviewValidate';

function UserPost() {
  const allReview = useSelector((state) => state.allReview)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  const filterReviews = allReview.filter(e => e.isValidated === false)

  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
      <div className="flex items-start justify-between">
        <SideBarUser />
        <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
          <tr className="text-center border-b-2 border-gray-300">
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Post</th>
            <th className="px-2 py-3">Validacion</th>
          </tr>

          <tr className="bg-gray-100 border-b border-gray-200">
            {filterReviews.length ? filterReviews.map(review => {
                <>
                <td className="px-4 py-3">{review.user.fullName}</td>
            <td className="px-4 py-3">{review.post.title}</td>
            <td className="px-4 py-3">
              <button className="bg-green-300 hover:bg-green-500 text-white decoration-none font-bold py-2 px-4 rounded-full">
                <ModalReviewValidate />
              </button>
            </td>
            </>
            })
            :
            null
            }


            
          </tr>
        </table>
      </div>
    </main>
  )
}

export default UserPost
